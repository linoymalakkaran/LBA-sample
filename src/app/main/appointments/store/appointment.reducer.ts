import { AppointmentActions, LBAppointmentActions } from "./appointment.action";
import {
  InitialAppointmentState,
  IAppointmentState,
} from "./appointment.state";

export function appointmentReducer(
  state = InitialAppointmentState,
  action: AppointmentActions
): IAppointmentState {
  switch (action.type) {
    case LBAppointmentActions.GetAppointmentTableData: {
      return {
        ...state,
        AppointmentTableState: {
          ...state.AppointmentTableState,
          loading: true,
        },
      };
    }
    case LBAppointmentActions.GetAppointmentTableDataSuccess: {
      return {
        ...state,
        AppointmentTableState: {
          ...state.AppointmentTableState,
          loading: false,
          appointmentList: action.payload,
          error: null,
        },
      };
    }
    case LBAppointmentActions.GetAppointmentTableDataFailure: {
      return {
        ...state,
        AppointmentTableState: {
          ...state.AppointmentTableState,
          loading: false,
          error: action.payload,
        },
      };
    }
    case LBAppointmentActions.refreshAppointmentTableData: {
      return {
        ...state,
        AppointmentTableState: {
          ...state.AppointmentTableState,
          refreshTable: action.payload,
        },
      };
    }
    case LBAppointmentActions.DeleteAppointmentDataCompleted: {
      return {
        ...state,
        AppointmentTableState: {
          ...state.AppointmentTableState,
          loading: true,
        },
      };
    }
    case LBAppointmentActions.DeleteAppointmentDataCompleted: {
      return {
        ...state,
        AppointmentTableState: {
          ...state.AppointmentTableState,
          loading: false,
          deleteFileId: action.payload,
        },
      };
    }
    case LBAppointmentActions.DeleteAppointmentDataFailed: {
      return {
        ...state,
        AppointmentTableState: {
          ...state.AppointmentTableState,
          loading: false,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
