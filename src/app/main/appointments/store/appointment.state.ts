import { AppointmentState } from '../models/Appointment.models';

export interface IAppointmentState {
  Appointment: AppointmentState;
  loading: boolean;
  error: string | any;
}

export const initialAppointmentState: IAppointmentState  = {
  Appointment: null,
  loading: false,
  error: null
};
