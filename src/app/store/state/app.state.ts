import {
  initialAppointmentState,
  IAppointmentState,
} from "app/main/appointments/store/Appointment.state";

export interface IAppState {
  Appointment: IAppointmentState;
}
export const initialAppState: IAppState = {
  Appointment: initialAppointmentState,
};
export function getInitialState(): IAppState {
  return initialAppState;
}
