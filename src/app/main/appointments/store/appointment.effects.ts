import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect, Effect } from '@ngrx/effects';
import { FileuploadService } from '@shared/services/fileupload.service';
import { of } from 'rxjs';
import { switchMap, map, mergeMap, catchError } from 'rxjs/operators';
import { EAppointmentActions, UploadAppointment, UploadAppointmentFailure, UploadAppointmentSuccess } from './Appointment.action';

@Injectable()
export class AppointmentEffects {

    @Effect()
    uploadAppointment$ = this.actions$.pipe();

    constructor(
        private actions$: Actions,
        private fileUploadService: FileuploadService
    ) { }
}
