import React from "react";
import ReactPlayer from "react-player";
import Avatar from "@mui/material/Avatar/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { WorkoutSession } from "../../Services/Types";

interface WorkoutSessionsProps {
  sessions?: WorkoutSession[];
}

const WorkoutSessions = ({ sessions }: WorkoutSessionsProps) => {
  return (
    <List sx={{ width: "100%" }}>
      {sessions?.map((session, index) => (
        <React.Fragment key={"session-" + index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={
                  session.completed
                    ? "/Images/tick-square-done.svg"
                    : "/Images/play-circle.svg"
                }
              />
            </ListItemAvatar>
            <ListItemText
              primary={session.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {session.time}
                  </Typography>
                  {" - " + session.description}
                </React.Fragment>
              }
            />
          </ListItem>
          {!session.completed ? (
            <ListItem alignItems="center">
              <ReactPlayer url={session.video}  style={{ margin:'auto'}}/>
            </ListItem>
          ) : null}
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default WorkoutSessions;