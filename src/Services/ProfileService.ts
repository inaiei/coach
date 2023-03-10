import { UserProfile } from "./Types";

export const saveProfile = async (userProfile: UserProfile) => {
    return await fetch(
        process.env.REACT_APP_API_URL + '/userprofile',
        {
            method: 'post',
            headers: { Accept: 'application/json' },
            body: JSON.stringify(userProfile)
        });
}

export const getProfile = async (email: string) => {
    const url = process.env.REACT_APP_API_URL + '/userprofiles?email=' + email;
    return await fetch(url, {
        method: 'GET',
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

