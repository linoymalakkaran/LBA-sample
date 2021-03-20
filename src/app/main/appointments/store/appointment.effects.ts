import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, mergeMap, catchError } from 'rxjs/operators';
import { AppointmentService } from '../services/appointment.service';

@Injectable()
export class AppointmentEffects {

    constructor(
        private actions$: Actions,
        private appointmentService: AppointmentService
    ) { }
}
