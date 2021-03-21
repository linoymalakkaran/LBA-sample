import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AppointmentAPI } from "../config/api.appointment.config";
import { createDescriptorHeader } from "../helper/data.helper";
import { ELEMENT_DATA } from "../helper/dmmy.data";
import {
  AppointmentTableResponse,
  PeriodicElement,
} from "../models/Appointment.models";
import { DataDescriptor } from "../models/data-descriptor.model";

@Injectable({
  providedIn: "root",
})
export class AppointmentTableService {
  constructor(
    private http: HttpClient,
    private appointmenttableApi: AppointmentAPI
  ) {}

  public getAppointmentTableDocumentList(
    payload: DataDescriptor
  ): Observable<AppointmentTableResponse> {
    // return this.http.get(this.appointmenttableApi.GET_APPOINTMENT_TABLE(), {
    //   headers: createDescriptorHeader(payload),
    // });
    const AppointmentTableResponse : AppointmentTableResponse = {
      data: ELEMENT_DATA,
      msg: "Success",
    };
    return of(AppointmentTableResponse);
  }

  public deleteAppointmentTableData(fileid: string): Observable<any> {
    return this.http.delete(
      this.appointmenttableApi.DELETE_APPOINTMENT(fileid)
    );
  }
}
