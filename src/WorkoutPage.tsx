import { useContext } from "react";
import { globalContext } from "./Store/Index";
import DefaultContainer from "./DefaultContainer";
import Workout from "./Components/Workouts/Workout";
import { useNavigate, useParams } from "react-router-dom";
import Routers from "./Routers";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const WorkoutPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { globalState } = useContext(globalContext);
  const workout = globalState.userProfile.workouts?.find(
    (workout) => workout.id.toString() === id
  );

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => {
        navigate(Routers.default);
      }}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => {
        navigate(Routers.myWorkouts);
      }}
    >
      My workouts
    </Link>,
    <Typography key="3" color="text.primary">
      {workout?.title}
    </Typography>,
  ];

  return (
    <DefaultContainer breadcrumbs={breadcrumbs}>
      <Workout workout={workout} />
    </DefaultContainer>
  );
};

export default WorkoutPage;
