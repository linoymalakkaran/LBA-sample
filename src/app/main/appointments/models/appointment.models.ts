export interface AppointmentUpload {
    fileName: string ;
    mimeType: string;
    createdBy: string;
    fileContent: string ;
    createdDate: any;
    configuration: string;
    status: string;
}
export interface AppointmentState {
    AppointmentUpload: AppointmentUpload[];
}
