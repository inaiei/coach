import * as React from "react";
import Typography from "@mui/material/Typography";
import {Workout} from '../../Services/Types';
import WorkoutSessions from "./WorkoutSessions";

interface WorkoutProp {
  workout?:Workout;
}

const WorkoutComponent = ({workout}:WorkoutProp) => {
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5" align="center">
        {workout?.title}
      </Typography>

      <Typography component="p" sx={{ textAlign: "justify" }}>
        {workout?.description}
      </Typography>

      <WorkoutSessions sessions={workout?.sessions} />
    </React.Fragment>
  );
}

export default WorkoutComponent;