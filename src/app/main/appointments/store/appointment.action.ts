import { Action } from "@ngrx/store";
import { AppointmentList } from "../models/Appointment.models";

export enum EAppointmentActions {
  GetAppointments = "[Appointment] Get Appointments",
  GetAppointmentsSuccess = "[Appointment] Get Appointment Success",
  GetAppointmentsFailure = "[Appointment] Get Appointment Failure",
}

export class GetAppointments implements Action {
  public readonly type = EAppointmentActions.GetAppointments;
  constructor(public payload: AppointmentList[]) {}
}

export class GetAppointmentsSuccess implements Action {
  public readonly type = EAppointmentActions.GetAppointmentsSuccess;
  constructor(public payload: any) {}
}

export class GetAppointmentsFailure implements Action {
  public readonly type = EAppointmentActions.GetAppointmentsFailure;
  constructor(public payload: any) {}
}

export type AppointmentActions =
  | GetAppointments
  | GetAppointmentsSuccess
  | GetAppointmentsFailure;
