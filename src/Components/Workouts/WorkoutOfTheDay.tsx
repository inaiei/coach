import { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { globalContext } from "../../Store/Index";
import Routers from "../../Routers";
import React from "react";
import { Workout } from "../../Services/Types";

const WorkoutOfTheDay = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[new Date().getDay()];

  const navigate = useNavigate();
  const { globalState } = useContext(globalContext);
  const [workoutsOfTheDay, setWorkoutsOfTheDay] = React.useState<
    Workout[] | undefined
  >([]);

  useEffect(() => {
    setWorkoutsOfTheDay(
      globalState.userProfile.workouts?.filter(
        (workout) => workout.dayOfWeek === day
      )
    );
  }, [globalState.userProfile.workouts, day]);

  return (
    <List sx={{ width: "100%" }}>
      {!workoutsOfTheDay?.length && (
        <Typography
          sx={{ display: "inline" }}
          component="p"
          color="text.primary"
        >
          No workout today
        </Typography>
      )}
      {workoutsOfTheDay?.map((workout, index) => (
        <Fragment key={"session-" + index}>
          <ListItem
            alignItems="flex-start"
            onClick={() => {
              navigate(Routers.workout.replace(":id", workout.id.toString()));
            }}
          >
            <ListItemAvatar>
              <Avatar alt={workout.dayOfWeek} src={workout.dayOfWeek} />
            </ListItemAvatar>
            <ListItemText
              primary={workout.title}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {workout.dayOfWeek}
                  </Typography>
                  {" - " + workout.description}
                </Fragment>
              }
            />
          </ListItem>

          {workoutsOfTheDay?.length === index && <Divider component="li" />}
        </Fragment>
      ))}
    </List>
  );
};

export default WorkoutOfTheDay;
