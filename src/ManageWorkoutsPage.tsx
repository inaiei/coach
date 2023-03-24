import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ManageMyWorkout from "./Components/Workouts/ManageMyWorkout";
import ManageWorkoutSessions from "./Components/Workouts/ManageWorkoutSessions";
import DefaultContainer from "./DefaultContainer";
import Routers from "./Routers";
import { Workout, WorkoutSession } from "./Services/Types";
import { globalContext } from "./Store/Index";

const WorkoutsPage = () => {
  const navigate = useNavigate();
  const { globalState } = useContext(globalContext);
  const [workout, setWorkout] = useState<Workout>()
  const [sessions, setSessions] = useState<WorkoutSession[]>();
  const { id } = useParams();

  useEffect(() => {
    const workoutItem = globalState.userProfile.workouts?.find(
      (workout) => workout.id.toString() === id
    ) 
    setWorkout(workoutItem)
    setSessions(globalState.sessions.filter(session => workoutItem?.sessions.includes(session.id)))
  }, [globalState.sessions, globalState.userProfile.workouts, id])

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
      My Workouts
    </Link>,
    <Typography key="3" color="text.primary" >
      Manage workout
    </Typography>,
  ];

  return (
    <DefaultContainer breadcrumbs={breadcrumbs}>
      <ManageMyWorkout workout={workout} />
      <ManageWorkoutSessions sessions={sessions} />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {

        }}
      >
        Save
      </Button>
    </DefaultContainer>
  );
};

export default WorkoutsPage;
