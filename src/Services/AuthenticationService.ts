import {GoogleProfile} from "./Types";

export const googleSignUp = async (profile: GoogleProfile) => {
    return await fetch(
        process.env.REACT_APP_API_URL + '/googlesignup',
        {
            method: 'post',
            headers: { Accept: 'application/json' }, 
            body: JSON.stringify(profile)
        });
} 