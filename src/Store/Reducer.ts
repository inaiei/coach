import { ActionType, GlobalStateInterface } from './Types';
import { initialState } from './Index';

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.payload,
      };
    case 'SET_ACTIVITY_LEVELS':
      return {
        ...state,
        activityLevels: action.payload
      };
    case 'SET_GOALS':
      return {
        ...state,
        goals: action.payload
      };
    case 'SET_WORKOUT_SESSIONS':
      return {
        ...state,
        sessions: action.payload
      };
    case 'SET_WORKOUTS':
      return {
        ...state,
        workouts: action.payload
      };
    case 'SET_PROGRAMS':
      return {
        ...state,
        programs: action.payload
      };
    case 'GOOGLE_SIGNUP':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          email: action.payload.email,
          name: action.payload.name,
          picture: action.payload.picture
        },
      };
    case 'SET_PERSISTENCE':
      return {
        ...state,
        persistenceType: action.payload,
      };
    case 'PURGE_STATE':
      return initialState;
    default:
      return state;
  }
};

export default Reducer;