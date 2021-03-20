import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from '@core/guard/auth.guard';
import { UserRoleGuard } from '@core/guard/user-role.guard';
import { NoAuthGuard } from '@core/guard/no-auth.guard';
import { throwIfAlreadyLoaded } from '@core/guard/module-import.guard';

import { TokenInterceptor } from '@core/interceptor/token.interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AuthGuard,
    NoAuthGuard,
    UserRoleGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
