import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fragment, useContext } from "react";
import CardSelector, {
  CardSelectorPosition,
} from "./Components/Base/CardSelector";
import MacroProtions from "./Components/Macros/MacroProtions";
import WorkoutOfTheDay from "./Components/Workouts/WorkoutOfTheDay";
import { mainMenu } from "./Data/MainMenu";
import DefaultContainer from "./DefaultContainer";
import { globalContext } from "./Store/Index";

const Default = () => {
  const { globalState } = useContext(globalContext);

  return (
    <DefaultContainer>
      {globalState.userProfile.workouts?.length ? (
        <Fragment>
          <Typography component="h1" variant="h5" align="center">
            Workout of the day
          </Typography>

          <WorkoutOfTheDay />

          <Typography component="h1" variant="h5" align="center">
            Tracking daily portions
          </Typography>

          <MacroProtions />
        </Fragment>
      ) : (
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
      )}
    </DefaultContainer>
  );
};

export default Default;
