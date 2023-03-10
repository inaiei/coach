export const getWorkouts = async () => {
    return await fetch(
        process.env.REACT_APP_API_URL + '/workouts',
        {
            method: 'get',
            headers: { Accept: 'application/json' }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Fetch failed');
            } else {
                return response.json();
            }
        });
} 

export const getWorkoutSessions = async () => {
    return await fetch(
        process.env.REACT_APP_API_URL + '/workoutsessions',
        {
            method: 'get',
            headers: { Accept: 'application/json' }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Fetch failed');
            } else {
                return response.json();
            }
        });
} 
