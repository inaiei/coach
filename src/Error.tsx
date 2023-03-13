import Alert from "@mui/material/Alert";
import React from "react";
import { Fragment, useContext, useEffect } from "react";
import { globalContext } from "./Store/Index";

const Error = () => {
  const { globalState } = useContext(globalContext);
  const { dispatch } = React.useContext(globalContext);

  useEffect(() => {
    if (globalState.error) {
      const timer = setTimeout(() => {
        dispatch({ type: "SET_ERROR", payload: "" });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [globalState.error, dispatch]); 

  return (
    <Fragment>
      {globalState.error && <Alert severity="error">{globalState.error}</Alert>}
    </Fragment>
  );
};

export default Error;
