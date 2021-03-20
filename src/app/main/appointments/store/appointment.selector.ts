import { createSelector } from "@ngrx/store";
import { IAppState } from "../../../store/state/app.state";
import { IAppointmentState } from "./Appointment.state";

const selectAppointment = (state: IAppState) => state.Appointment;

export const selectAppointmentError = createSelector(
  selectAppointment,
  (state: IAppointmentState) => {
    return state.error;
  }
);

export const selectAppointmentList = createSelector(
  selectAppointment,
  (state: IAppointmentState) => {
    if (state.Appointment) {
      return state.Appointment.appointmentList;
    }
  }
);
