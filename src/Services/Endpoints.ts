export const endpoints = {
    getProfile: `${process.env.REACT_APP_API_URL}/userprofiles?email=:email`, 
    saveProfile: `${process.env.REACT_APP_API_URL}/userprofiles`, 
    getWorkouts: `${process.env.REACT_APP_API_URL}/workouts`, 
    getWorkoutSessions: `${process.env.REACT_APP_API_URL}/workoutsessions`
} 