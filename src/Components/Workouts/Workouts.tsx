import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Routers from "../../Routers";
import { getWorkouts } from "../../Services/WorkoutService";
import { Workout } from "../../Services/Types";

const Workouts = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<any>(undefined);

  useEffect(() => {
    const fetchWorkouts = async () => {
      await getWorkouts().then((workouts) => {
        setWorkouts(workouts);
      });
    };

    fetchWorkouts();
  });

  return (
    <List sx={{ width: "100%" }}>
      {workouts?.map((workout:Workout, index:number) => (
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
          <Divider component="li" />
        </Fragment>
      ))}
    </List>
  );
};

export default Workouts;
