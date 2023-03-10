
export const getMyWorkouts = async (email: string) => {
    return await fetch(
        process.env.REACT_APP_API_URL + '/workouts',
        {
            method: 'post',
            headers: { Accept: 'application/json' }, 
            body: JSON.stringify(email)
        });
} 