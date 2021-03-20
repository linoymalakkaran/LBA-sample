import { Injectable } from "@angular/core";
import { EnvService } from "src/app/env.service";

@Injectable()
export class ApiConfig {
  constructor(private api: EnvService) {}

  // Common

  getLbaUIUrl = (): string => `${this.api.lbaUIUrl}`;

  LBA_POST_CreateAppointments = (): any =>
    `${this.api.apiUrl}lba/api/appointment/Create`;
  DO_GET_Appointments = (term: string, pageSize: number = 10): string =>
    `${this.api.apiUrl}lba/api/appointment/get?searchString=${term}&pageSize=${pageSize}`;
}
