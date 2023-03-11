import { Method, customFetch } from "../Hooks/customFetch";
import { UserProfile } from "./Types";

export const saveProfile = async (userProfile: UserProfile) => {
    const url = `${process.env.REACT_APP_API_URL}/userprofile`;
    return customFetch(url, Method.Post, userProfile);
}

export const getProfile = async (email: string) => {
    const url = `${process.env.REACT_APP_API_URL}/userprofiles?email=${email}`;
    return customFetch(url, Method.Get);
}

