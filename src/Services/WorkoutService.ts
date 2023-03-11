import { customFetch, Method } from "../Hooks/customFetch";

export const getWorkouts = async () => {
    const url = `${process.env.REACT_APP_API_URL}/workouts`;
    return customFetch(url, Method.Get);
} 

export const getWorkoutSessions = async () => {
    const url = `${process.env.REACT_APP_API_URL}/workoutsessions`;
    return customFetch(url, Method.Get);
} 
