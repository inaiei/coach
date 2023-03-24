import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import CardSelector, {
  CardSelectorPosition,
} from "./Components/Base/CardSelector";
import { mainMenu } from "./Data/MainMenu";
import DefaultContainer from "./DefaultContainer";

const Default = () => {
  return (
    <DefaultContainer>
        <Fragment>
          <Typography component="h1" variant="h5" align="center">
            Let's get started
          </Typography>

          <Typography component="p">
            Based on your answers we put together a nutrition plan and a
            personalised workout just for you.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <CardSelector
              items={mainMenu}
              position={CardSelectorPosition.Top}
            />
          </Box>
        </Fragment>
    </DefaultContainer>
  );
};

export default Default;
