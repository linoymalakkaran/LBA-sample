import { Action } from "@ngrx/store";
import { AppointmentList } from "../models/Appointment.models";

export enum EAppointmentActions {
  UploadAppointment = "[Appointment] Upload Appointment",
  UploadAppointmentSuccess = "[Appointment] Upload Appointment Success",
  UploadAppointmentFailure = "[Appointment] Get User Failure",
}

export class UploadAppointment implements Action {
  public readonly type = EAppointmentActions.UploadAppointment;
  constructor(public payload: AppointmentList[]) {}
}

export class UploadAppointmentSuccess implements Action {
  public readonly type = EAppointmentActions.UploadAppointmentSuccess;
  constructor(public payload: any) {}
}

export class UploadAppointmentFailure implements Action {
  public readonly type = EAppointmentActions.UploadAppointmentFailure;
  constructor(public payload: any) {}
}

export type AppointmentActions =
  | UploadAppointment
  | UploadAppointmentSuccess
  | UploadAppointmentFailure;
