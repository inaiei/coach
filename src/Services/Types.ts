import { ActivityLevel, Country, SelectorItem } from "../Data/Types";

export interface GoogleProfile {
    email: string,
    email_verified: boolean;
    family_name: string;
    given_name: string;
    name: string;
    picture: string;
}

export interface UserProfile {
    email: string,
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
    activityLevel?: ActivityLevel;
    goal?: SelectorItem;
    workouts?: Workout[];
}

export type Workout = {
    id: number;
    dayOfWeek: string;
    title: string;
    description: string;
    sessions: WorkoutSession[];
  }
  
  export type WorkoutSession = {
    title: string;
    time: string;
    description: string;
    video: string;
    completed: boolean;
  }