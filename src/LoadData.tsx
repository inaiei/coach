import { useContext, useEffect } from "react";
import { Method, useFetch } from "./Hooks/useFetch";
import { endpoints } from "./Services/Endpoints";
import { globalContext } from "./Store/Index";

const LoadData = () => {
  const { globalState } = useContext(globalContext);
  const { dispatch } = useContext(globalContext);
  const fetch = useFetch();

  useEffect(() => {
    if (!globalState.activityLevels?.length) {
      fetch(endpoints.getActivities, Method.Get).then((activityLevels) => {
        dispatch({ type: "SET_ACTIVITY_LEVELS", payload: activityLevels });
      });
    }

    if (!globalState.goals?.length) {
      fetch(endpoints.getGoals, Method.Get).then((goals) => {
        dispatch({ type: "SET_GOALS", payload: goals });
      });
    }

    if (!globalState.sessions?.length) {
      fetch(endpoints.getWorkoutSessions, Method.Get).then((sessions) => {
        dispatch({ type: "SET_WORKOUT_SESSIONS", payload: sessions });
      });
    }

    if (!globalState.workouts?.length) {
      fetch(endpoints.getWorkouts, Method.Get).then((workouts) => {
        dispatch({ type: "SET_WORKOUTS", payload: workouts });
      });
    }

    if (!globalState.programs?.length) {
      fetch(endpoints.getPrograms, Method.Get).then((programs) => {
        dispatch({ type: "SET_PROGRAMS", payload: programs });
      });
    }
  });

  return null;
};

export default LoadData;
