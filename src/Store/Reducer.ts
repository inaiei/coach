import { ActionType, GlobalStateInterface } from './Types';
import { initialState } from './Index';

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.payload,
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