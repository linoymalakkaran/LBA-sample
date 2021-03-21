import { Action } from "@ngrx/store";
import { DataDescriptor } from "../models/data-descriptor.model";

export enum LBAppointmentActions {
  GetAppointmentTableData = '[Get Document] Request',
  GetAppointmentTableDataSuccess = '[Get Document] Success',
  GetAppointmentTableDataFailure = '[Get Document] Failure',
  refreshAppointmentTableData = '[event trigger] refresh Appointment Table Data',
  DeleteAppointmentTableData = '[ delete doc]  Delete Documnent',
  DeleteAppointmentDataCompleted = '[delete doc ] Delete completed',
  DeleteAppointmentDataFailed = '[delete doc] Delete Failed'
}

export class GetAppointmentTableData implements Action {
  public readonly type = LBAppointmentActions.GetAppointmentTableData;
  constructor(public payload: DataDescriptor) { }
}

export class GetAppointmentTableDataSuccess implements Action {
  public readonly type = LBAppointmentActions.GetAppointmentTableDataSuccess;
  constructor(public payload: any) { }
}

export class GetAppointmentTableDataFailure implements Action {
  public readonly type = LBAppointmentActions.GetAppointmentTableDataFailure;
  constructor(public payload: string) { }
}

export class RefreshAppointmentTableData implements Action {
  public readonly type = LBAppointmentActions.refreshAppointmentTableData;
  constructor(public payload: boolean) { }
}

export class DeleteAppointmentTableData implements Action {
  public readonly type = LBAppointmentActions.DeleteAppointmentTableData;
  constructor(public payload: string) { }
}

export class DeleteAppointmentDataCompleted implements Action {
  public readonly type = LBAppointmentActions.DeleteAppointmentDataCompleted;
  constructor(public payload: any) { }

}

export class DeleteAppointmentDataFailed implements Action {
  public readonly type = LBAppointmentActions.DeleteAppointmentDataFailed;
  constructor(public payload: any) { }
}


export type AppointmentActions=
GetAppointmentTableData |
GetAppointmentTableDataSuccess |
GetAppointmentTableDataFailure |
RefreshAppointmentTableData |
DeleteAppointmentTableData |
DeleteAppointmentDataCompleted |
DeleteAppointmentDataFailed;
