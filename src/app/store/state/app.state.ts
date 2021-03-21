import {
  InitialAppointmentState,
  IAppointmentState,
} from "app/main/appointments/store/appointment.state";

export interface IAppState {
  Appointment: IAppointmentState;
}
export const initialAppState: IAppState = {
  Appointment: InitialAppointmentState,
};
export function getInitialState(): IAppState {
  return initialAppState;
}
