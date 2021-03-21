import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from "@ngrx/store";

import { IAppointmentState } from "./appointment.state";

const getAppointmentTableDataError = (state: IAppointmentState): string =>
  state.AppointmentTableState.error || null;
const getAppointmentTableData = (state: IAppointmentState): any =>
  state.AppointmentTableState.appointmentList || [];
const getAppointmentDataLoading = (state: IAppointmentState): boolean =>
  state.AppointmentTableState.loading || false;
const getAppointmentRefreshTableHS = (state: IAppointmentState): boolean =>
  state.AppointmentTableState.refreshTable || false;
const deleteAppointmentTableDataCompleted = (state: IAppointmentState): string =>
  state.AppointmentTableState.deleteFileId || null;

export const selectAppointmentFeatureState: MemoizedSelector<
  object,
  IAppointmentState
> = createFeatureSelector<IAppointmentState>("appointment");

export const selectAppointmentDataError: MemoizedSelector<
  object,
  string
> = createSelector(selectAppointmentFeatureState, getAppointmentTableDataError);

export const selectAppointmentData: MemoizedSelector<
  object,
  any
> = createSelector(selectAppointmentFeatureState, getAppointmentTableData);

export const selectAppointmentDataLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectAppointmentFeatureState, getAppointmentDataLoading);

export const selectAppointmentDataRefresh: MemoizedSelector<
  object,
  boolean
> = createSelector(selectAppointmentFeatureState, getAppointmentRefreshTableHS);

export const selectAppointmentDataDeleted: MemoizedSelector<
  object,
  string
> = createSelector(selectAppointmentFeatureState, deleteAppointmentTableDataCompleted);
