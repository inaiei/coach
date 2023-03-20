import { useContext } from "react";
import { globalContext } from "../Store/Index";

export enum Method {
  Get,
  Post
}

export const useFetch = () => {
  const { dispatch } = useContext(globalContext);

  return async (url: string, method: Method, body?: any) => {
    let options = undefined

    if (method === Method.Post) {
      return new Promise((resolve, reject) => { resolve("done") });

      // options = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body)
      // }
    } else {
      options = {
        method: "GET",
        headers: { Accept: "application/json" }
      }
    }

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = (await response.json())
      return data
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
    }
  }
};
