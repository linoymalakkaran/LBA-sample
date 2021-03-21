import { Injectable } from "@angular/core";
import { EnvService } from "../../../env.service";

@Injectable()
export class AppointmentAPI {
  constructor(private api: EnvService) {}
  GET_APPOINTMENT_TABLE = (): string => `${this.api.baseApiUrl}List`;
  DELETE_APPOINTMENT = (fileId: string): string =>
    `${this.api.baseApiUrl}delete${fileId}`;
}
