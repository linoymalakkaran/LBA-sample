import { HttpEvent, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import {
  catchError,
  concatMap,
  map,
  switchMap,
  takeUntil,
  tap,
} from "rxjs/operators";
import { AppointmenttableService } from "../services/appointmenttable.service";
import {
  LBAppointmentActions,
  GetAppointmentTableData,
  GetAppointmentTableDataSuccess,
  GetAppointmentTableDataFailure,
  DeleteAppointmentTableData,
} from "./appointment.action";
import * as appointmentTableActions from './appointment.action';

@Injectable()
export class AppointmentEffects {
  @Effect()
  appointmenttabledataRequestEffect$ = this.actions$.pipe(
    ofType<GetAppointmentTableData>(
      LBAppointmentActions.GetAppointmentTableData
    ),
    switchMap((action) =>
      this.appointmenttableService
        .getAppointmentTableDocumentList(action.payload)
        .pipe(
          catchError((e) => of(new GetAppointmentTableDataFailure(e.error.msg)))
        )
    ),
    map(
      (response: any) =>
        new GetAppointmentTableDataSuccess(response.data ? response.data : [])
    )
  );

  @Effect()
  deleteAappointmentRequestEffect$ = this.actions$.pipe(
    ofType(LBAppointmentActions.DeleteAppointmentTableData),
    switchMap((action: DeleteAppointmentTableData) =>
      this.appointmenttableService
        .deleteAppointmentTableData(action.payload)
        .pipe(
          map(
            (response: any) =>
              new appointmentTableActions.DeleteAppointmentDataCompleted(
                response.data.fileId
              )
          ),
          catchError((error) =>
            of(
              new appointmentTableActions.DeleteAppointmentDataFailed(
                error.error.msg
              )
            )
          )
        )
    )
  );

  constructor(
    private appointmenttableService: AppointmenttableService,
    private actions$: Actions
  ) {}
}
