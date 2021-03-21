import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppointmentAPI } from "../config/api.appointment.config";
import { createDescriptorHeader } from "../helper/data.helper";
import { DataDescriptor } from "../models/data-descriptor.model";

@Injectable({
  providedIn: "root",
})
export class AppointmenttableService {
  constructor(
    private http: HttpClient,
    private appointmenttableApi: AppointmentAPI
  ) {}

  public getAppointmentTableDocumentList(
    payload: DataDescriptor
  ): Observable<any> {
    return this.http.get(this.appointmenttableApi.GET_APPOINTMENT_TABLE(), {
      headers: createDescriptorHeader(payload),
    });
  }

  public deleteAppointmentTableData(fileid: string): Observable<any> {
    return this.http.delete(
      this.appointmenttableApi.DELETE_APPOINTMENT(fileid)
    );
  }
}
