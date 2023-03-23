import { Country } from "../Data/Types";

export interface GoogleProfile {
  email: string,
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  picture: string;
}

export interface UserProfile {
  id: string,
  email: string,
  password: string,
  name: string;
  picture: string;
  country?: Country;
  mobile: string;
  gender: string;
  age: number;
  height: number;
  heightUnit: string;
  weight: number;
  weightUnit: string;
  activityLevelId?: number;
  goalId?: number;
  workouts?: Workout[];
  macros?: Macros[];
}

export type Programs = {
  goalId: number;
  activityLevelId: number;
  workouts: number[];
}

export type Workout = {
  id: number;
  dayOfWeek: string;
  title: string;
  description: string;
  sessions: number[];
}

export type WorkoutSession = {
  id: number;
  title: string;
  time: string;
  description: string;
  video: string;
  completed: boolean;
}

export type Macros = {
  date: string,
  protein: boolean[],
  fat: boolean[],
  veggies: boolean[],
  carbs: boolean[]
}