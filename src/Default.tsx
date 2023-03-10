import Typography from "@mui/material/Typography";
import CardSelector from "./Components/Base/CardSelector";
import Workouts from "./Components/Workouts/Workouts";
import { mainMenu } from "./Data/MainMenu";
import DefaultContainer from "./DefaultContainer";

const Default = () => {
  return (
    <DefaultContainer>
      <Typography component="h1" variant="h5" align="center">
        Welcome
      </Typography>

      {/* no sessions set up */}
      <CardSelector items={mainMenu} md={4} />

      <Workouts />
    </DefaultContainer>
  );
}

export default Default;