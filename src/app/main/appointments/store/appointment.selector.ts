import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from "@ngrx/store";

import { AppointmentTableState } from "./appointment.state";

const getHTableDataError = (state: AppointmentTableState): string =>
  state.error || null;
const getHTableData = (state: AppointmentTableState): any =>
  state.documentList || [];
const getDataLoading = (state: AppointmentTableState): boolean =>
  state.loading || false;
const getRefreshTableHS = (state: AppointmentTableState): boolean =>
  state.refreshTable || false;
const deleteHTDataCompleted = (state: AppointmentTableState): string =>
  state.deleteFileId || null;

export const selectAppointmentFeatureState: MemoizedSelector<
  object,
  AppointmentTableState
> = createFeatureSelector<AppointmentTableState>("appointmenttable");

export const selectAppointmentDataError: MemoizedSelector<
  object,
  string
> = createSelector(selectAppointmentFeatureState, getHTableDataError);

export const selectAppointmentData: MemoizedSelector<
  object,
  any
> = createSelector(selectAppointmentFeatureState, getHTableData);

export const selectAppointmentDataLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectAppointmentFeatureState, getDataLoading);

export const selectAppointmentDataRefresh: MemoizedSelector<
  object,
  boolean
> = createSelector(selectAppointmentFeatureState, getRefreshTableHS);

export const selectAppointmentDataDeleted: MemoizedSelector<
  object,
  string
> = createSelector(selectAppointmentFeatureState, deleteHTDataCompleted);
