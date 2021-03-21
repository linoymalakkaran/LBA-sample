import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppointmentsComponent } from "./appointments.component";

import { AtlpSharedModule } from "@atlp/shared.module";
import { SharedModule } from "app/shared/shared.module";
import { RouterModule } from "@angular/router";

import { AtlpSearchBarModule } from "@atlp/components";

import {
  AppointmentTableComponent,
  NewAppointmentComponent,
  AppointementChargesComponent,
  AppointementReportComponent,
  AppointmentFileComponent,
  AddAwbComponent,
  AddDriverComponent,
} from "./components";
import { AppointmentRoutingModule } from "./appointment-routing-module";
import { AppointmentService } from "./services/appointment.service";
import { AppointmentTableService } from "./services/appointmenttable.service";
import { AppointmentAPI } from "./config/api.appointment.config";
import { AppointmentFiltersModule } from '../appointments/filters/appointment.filters.module';

@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentTableComponent,
    NewAppointmentComponent,
    AppointementChargesComponent,
    AppointementReportComponent,
    AppointmentFileComponent,
    AddAwbComponent,
    AddDriverComponent,
  ],
  imports: [
    AppointmentRoutingModule,
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
    AppointmentFiltersModule
  ],
  providers: [AppointmentService, AppointmentTableService],
})
export class AppointmentsModule {}
