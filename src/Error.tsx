import Alert from "@mui/material/Alert";
import { Fragment, useContext } from "react";
import { globalContext } from "./Store/Index";

const Error = () => {
  const { globalState } = useContext(globalContext);

  return (
    <Fragment>
      {globalState.error && (
        <Alert severity="error">{globalState.error}</Alert>
      )}
    </Fragment>
  );
};

export default Error;
