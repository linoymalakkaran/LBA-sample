import { EAppointmentActions, AppointmentActions } from "./Appointment.action";
import {
  IAppointmentState,
  initialAppointmentState,
} from "./Appointment.state";
import { AppointmentList } from "../models/Appointment.models";

export const initialState: IAppointmentState = initialAppointmentState;

export function AppointmentReducer(
  state = initialAppointmentState,
  action: AppointmentActions
): IAppointmentState {
  switch (action.type) {
    case EAppointmentActions.GetAppointments: {
      return {
        ...state,
        Appointment: {
          ...state.Appointment,
          appointmentList: action.payload,
        },
      };
    }
    case EAppointmentActions.GetAppointmentsFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
