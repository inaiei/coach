import Typography from "@mui/material/Typography";
import { Fragment, useContext } from "react";
import CardSelector from "./Components/Base/CardSelector";
import MyWorkouts from "./Components/Workouts/MyWorkouts";
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

          <MyWorkouts />
        </Fragment>
      ) : (
        <Fragment>
          <Typography component="h1" variant="h5" align="center">
            Let's get started
          </Typography>
          <CardSelector items={mainMenu} md={4} />
        </Fragment>
      )}
    </DefaultContainer>
  );
};

export default Default;
