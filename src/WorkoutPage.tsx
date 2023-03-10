import { useContext } from "react";
import { globalContext } from "./Store/Index";
import MainContainer from "./DefaultContainer";
import Workout from "./Components/Workouts/Workout";
import { useParams } from "react-router-dom";

const WorkoutPage= () => {
  const { id } = useParams();
  const { globalState } = useContext(globalContext);
  const workout = globalState.userProfile.workouts?.find(
    (workout) => workout.id.toString() === id
  );

  return (
    <MainContainer>
      <Workout workout={workout} />
    </MainContainer>
  );
}

export default WorkoutPage;