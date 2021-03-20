import { EAppointmentActions, AppointmentActions } from "./Appointment.action";
import { IAppointmentState, initialAppointmentState } from "./Appointment.state";
import { AppointmentUpload } from "../models/Appointment.models";

export const initialState: IAppointmentState = initialAppointmentState;

export function AppointmentReducer(
  state = initialAppointmentState,
  action: AppointmentActions
): IAppointmentState {
  switch (action.type) {
    case EAppointmentActions.UploadAppointment: {
      return {
        ...state,
        Appointment: {
          ...state.Appointment,
          AppointmentUpload: action.payload,
        },
      };
    }
    case EAppointmentActions.UploadAppointmentFailure: {
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
