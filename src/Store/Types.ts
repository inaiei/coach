import { Dispatch } from 'react';
import { UserProfile } from '../Services/Types';

export interface GlobalStateInterface {
  isUserAuthenticated: boolean;
  userProfile: UserProfile;
  persistenceType: string;
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};


