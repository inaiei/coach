import * as React from "react";
import Typography from "@mui/material/Typography";
import {Workout} from '../../Services/Types';
import WorkoutSessions from "./WorkoutSessions";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "../../Store/Index";

interface WorkoutProp {
  workout?:Workout;
}

const WorkoutComponent = ({workout}:WorkoutProp) => {
  const { globalState } = useContext(globalContext);
  const [sessions, setSessions] = useState<any>();

  useEffect(() => {
    setSessions(globalState.sessions.filter(session => workout?.sessions.includes(session.id)))
  }, [globalState.sessions, workout])

  return (
    <React.Fragment>
      {/* <Typography component="h1" variant="h5" align="center">
        {workout?.title}
      </Typography> */}

      {/* <Typography component="p" sx={{ textAlign: "justify" }}>
        {workout?.description}
      </Typography> */}

      <WorkoutSessions sessions={sessions} />
    </React.Fragment>
  );
}

export default WorkoutComponent;