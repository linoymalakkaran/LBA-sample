import {
  InitialAppointmentState,
  IAppointmentState,
} from "app/main/appointments/store/appointment.state";

export interface IAppState {
  appointment: IAppointmentState;
}
export const initialAppState: IAppState = {
  appointment: InitialAppointmentState,
};
export function getInitialState(): IAppState {
  return initialAppState;
}
