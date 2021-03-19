import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: '', redirectTo: '/appointments', pathMatch: 'full'
  },
  {
      path: 'appointments',
      loadChildren: () => import('./main/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
      path: 'payment',
      loadChildren: () => import('./main/payment/payment.module').then(m => m.PaymentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
