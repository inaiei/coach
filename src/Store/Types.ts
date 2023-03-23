import { Dispatch } from 'react';
import { ActivityLevel, Goal } from '../Data/Types';
import { Programs, UserProfile, Workout, WorkoutSession } from '../Services/Types';

export interface GlobalStateInterface {
  activityLevels: ActivityLevel[];
  goals: Goal[];
  sessions: WorkoutSession[];
  workouts: Workout[];
  programs: Programs[];
  isUserAuthenticated: boolean;
  userProfile: UserProfile;
  persistenceType: string;
  error: string;
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};


