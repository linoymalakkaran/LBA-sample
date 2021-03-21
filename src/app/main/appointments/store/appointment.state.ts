export interface AppointmentTableModel {
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
  AppointmentTableState: AppointmentTableModel;
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
