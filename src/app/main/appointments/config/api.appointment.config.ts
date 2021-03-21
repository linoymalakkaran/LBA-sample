import { Injectable } from "@angular/core";
import { EnvService } from "../../../env.service";

@Injectable()
export class AppointmentAPI {
  constructor(private api: EnvService) {}

  getLbaUIUrl = (): string => `${this.api.baseApiUrl}`;

  GET_APPOINTMENT_TABLE = (): string => `${this.getLbaUIUrl()}List`;

  DELETE_APPOINTMENT = (fileId: string): string =>
    `${this.getLbaUIUrl()}delete${fileId}`;

  POST_CREATE_APPOINTMENT = (): any =>
    `${this.getLbaUIUrl()}lba/api/appointment/create`;

 }
