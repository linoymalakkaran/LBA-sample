import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guard/auth.guard";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/appointments",
    pathMatch: "full",
    canActivate: [AuthGuard],
  },
  {
    path: "appointments",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./main/appointments/appointments.module").then(
        (m) => m.AppointmentsModule
      ),
  },
  {
    path: "payment",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./main/payment/payment.module").then((m) => m.PaymentModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
