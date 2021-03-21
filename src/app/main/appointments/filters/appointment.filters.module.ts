import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";
import { AppointmentFiltersComponent } from "./appointment.filters.component";

@NgModule({
  declarations: [AppointmentFiltersComponent],
  imports: [CommonModule, SharedModule],
  exports: [AppointmentFiltersComponent],
})
export class AppointmentFiltersModule {}
