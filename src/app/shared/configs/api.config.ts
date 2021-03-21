import { Injectable } from "@angular/core";
import { EnvService } from "app/env.service";

@Injectable()
export class ApiConfig {
  constructor(private api: EnvService) {}

  // Common

  getLbaUIUrl = (): string => `${this.api.baseApiUrl}`;

  
}
