export interface IAppointmentTableState {
  filter: any;
  order: any;
  pagination: any;
  appointmentList: any;
  error: string | any;
  loading: boolean;
  refreshTable: boolean;
  deleteFileId: string;
}

export interface IAppointmentState {
  AppointmentTableState: IAppointmentTableState;
}

export const InitialAppointmentState: IAppointmentState = {
  AppointmentTableState: {
    filter: [],
    order: [],
    pagination: {},
    appointmentList: [],
    refreshTable: false,
    error: null,
    loading: false,
    deleteFileId: null,
  },
};
