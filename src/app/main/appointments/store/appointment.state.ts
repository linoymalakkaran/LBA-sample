export interface AppointmentTableState {
  filter: any;
  order: any;
  pagination: any;
  documentList: any;
  error: string | any;
  loading: boolean;
  refreshTable: boolean;
  deleteFileId: string;
}

export interface IAppointmentState {
  AppointmentTableState: AppointmentTableState;
}

export const InitialAppointmentState: IAppointmentState = {
  AppointmentTableState: {
    filter: [],
    order: [],
    pagination: {},
    documentList: [],
    refreshTable: false,
    error: null,
    loading: false,
    deleteFileId: null,
  },
};
