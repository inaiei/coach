import React from "react";
import Container from "@mui/material/Container";
import TopBarMenu from "./Components/Base/TopBarMenu";

const DefaultContainer = (props: any) => {
  return (
    <React.Fragment>
      <TopBarMenu />
      <Container
        component="main"
        maxWidth="md">
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default DefaultContainer;
