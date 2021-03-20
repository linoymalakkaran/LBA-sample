import { Action } from '@ngrx/store';
import { AppointmentUpload } from '../models/Appointment.models';

export enum EAppointmentActions {
    UploadAppointment =   '[Appointment] Upload Appointment',
    UploadAppointmentSuccess = '[Appointment] Upload Appointment Success',
    UploadAppointmentFailure = '[Appointment] Get User Failure',
}

export class UploadAppointment implements Action {
    public readonly type = EAppointmentActions.UploadAppointment;
    constructor(public payload: AppointmentUpload[]) { }
}

export class UploadAppointmentSuccess implements Action {
    public readonly type = EAppointmentActions.UploadAppointmentSuccess;
    constructor(public payload: any) { }
}

export class UploadAppointmentFailure implements Action {
    public readonly type = EAppointmentActions.UploadAppointmentFailure;
    constructor(public payload: any) { }
}

export type AppointmentActions = UploadAppointment | UploadAppointmentSuccess | UploadAppointmentFailure;
