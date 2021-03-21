import { IAppState } from "../state/app.state";
import {
  ActionReducerMap,
  ActionReducer,
  Action,
  MetaReducer,
} from "@ngrx/store";
import { appointmentReducer } from "app/main/appointments/store/Appointment.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
  appointment: appointmentReducer,
};

export function clearState(
  reducer: ActionReducer<IAppState>
): ActionReducer<IAppState> {
  // tslint:disable-next-line: only-arrow-functions
  return function (state: IAppState | undefined, action: Action): IAppState {
    if (action.type === "[Auth] LOGOUT request") {
      state = undefined;
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<IAppState>[] = [clearState];
