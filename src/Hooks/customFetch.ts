export enum Method {
  Get,
  Post,
}

export const customFetch = async (url: string, method: Method, body?: any) => {
//  const { dispatch } = React.useContext(globalContext);

  const methodGet = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  const methodPost = {
    method: "post",
    headers: { Accept: "application/json" },
    body: JSON.stringify(body),
  };

  return await fetch(url, method === Method.Get ? methodGet : methodPost).then(
    (response) => {
      if (!response.ok) {
        alert(`request to ${url} failed`);
        // dispatch({
        //   type: "SET_ERROR",
        //   payload: `An error has occured - ${response}`,
        // });
        throw new Error("Fetch failed");
      } else {
        return response.json();
      }
    }
  );
};
