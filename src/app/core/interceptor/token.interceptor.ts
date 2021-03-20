import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpErrorResponse,
  HttpEvent,
} from "@angular/common/http";

import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, switchMap, finalize, filter, take } from "rxjs/operators";

import { IUser } from "../models/IUser";
import { AuthService } from "../services/auth.service";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    public loaderService: LoaderService
  ) {}

  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    null as any
  );

  httpRequstCount = 0;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
    | HttpEvent<any>
    | any
  > {
    // return next.handle(request);
    let jwt = null;
    const iUser: IUser = this.authService.getUser();
    if (iUser) {
      jwt = iUser.token;
    }

    this.httpRequstCount++;
    this.loaderService.show();

    if (jwt) {
      return next.handle(this.addTokenToRequest(request, jwt)).pipe(
        finalize(() => {
          this.httpRequstCount--;
          if (this.httpRequstCount === 0) {
            this.loaderService.hide();
          }
        }),
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>err).status) {
              case 401:
                return this.handle401Error(request, next);
              default:
                return throwError(err);
            }
          } else {
            return throwError(err);
          }
        })
      );
    } else {
      return next.handle(request).pipe(
        finalize(() => {
          this.httpRequstCount--;
          if (this.httpRequstCount === 0) {
            this.loaderService.hide();
          }
        })
      );
    }
  }

  private addTokenToRequest(
    request: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    // Reset here so that the following requests wait until the token
    // comes back from the refreshToken call.
    this.tokenSubject.next(null as any);

    return this.tokenSubject.pipe(
      filter((token): any => {
        if (!token) {
          this.authService.logout();
          return null;
        }
        return token != null;
      }),
      take(1),
      switchMap((token) => {
        return next.handle(this.addTokenToRequest(request, token));
      }),
      catchError((e): any => {
        return null;
      })
    );
  }
}
