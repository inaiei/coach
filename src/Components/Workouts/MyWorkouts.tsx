import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { globalContext } from "../../Store/Index";
import Routers from "../../Routers";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const MyWorkouts = () => {
  const navigate = useNavigate();
  const { globalState } = useContext(globalContext);

  return (
    <Fragment>
      <List sx={{ width: "100%" }}>
        {globalState.userProfile.workouts?.map((workout, index) => (
          <Fragment key={"session-" + index}>
            <ListItem
              sx={{ paddingLeft: 0, paddingRight: 0 }}
              alignItems="flex-start"
            >
              <Card >
                <CardContent onClick={() => {
                  navigate(Routers.workout.replace(":id", workout.id.toString()));
                }}
                >
                  <Typography variant="h5" component="div" sx={{ paddingTop: 0 }}>
                    {workout.title}
                  </Typography>

                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {workout.dayOfWeek}
                  </Typography>
                  {" - " + workout.description}
                </CardContent>
                <CardActions sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}>
                  <Button size="small" onClick={() => {
                    navigate(Routers.manageMyWorkouts.replace(":id", workout.id.toString()));
                  }}>Modify</Button>
                  <Button size="small">Remove</Button>
                </CardActions>
              </Card>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </Fragment>
  );
};

export default MyWorkouts;
