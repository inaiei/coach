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
import { Workout } from "../../Services/Types";
import { Method, useFetch } from "../../Hooks/useFetch";
import { endpoints } from "../../Services/Endpoints";

const Workouts = () => {
  const navigate = useNavigate();
  const fetch = useFetch();
  const [workouts, setWorkouts] = useState<any>(undefined);

  useEffect(() => {
    const fetchWorkouts = async () => {
      await fetch(endpoints.getWorkouts, Method.Get).then((workouts) => {
        setWorkouts(workouts);
      });
    };

    fetchWorkouts();
  });

  return (
    <List sx={{ width: "100%" }}>
      {workouts?.map((workout: Workout, index: number) => (
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
