import { Fragment, useContext } from "react";
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

const MyWorkouts = () => {
  const navigate = useNavigate();
  const { globalState } = useContext(globalContext);

  return (
    <Fragment>
      <List sx={{ width: "100%" }}>
        {globalState.userProfile.workouts?.map((workout, index) => (
          <Fragment key={"session-" + index}>
            <ListItem
              alignItems="flex-start"
              onClick={() => {
                navigate(Routers.workout.replace(":id", workout.id.toString()));
              }}
            >
              {workout.dayOfWeek && (
                <ListItemAvatar>
                  <Avatar alt={workout.dayOfWeek} src={workout.dayOfWeek} />
                </ListItemAvatar>
              )}
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
    </Fragment>
  );
};

export default MyWorkouts;
