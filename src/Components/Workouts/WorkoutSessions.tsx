import React from "react";
import Avatar from "@mui/material/Avatar/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { WorkoutSession } from "../../Services/Types";
import { Media, Video } from "@vidstack/player-react";

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
              <Media>
                <Video loading="visible" controls>
                  <video
                    src={session.video}
                    preload="none"
                    data-video="0"
                    controls
                  />
                </Video>
              </Media>
            </ListItem>
          ) : null}
          {/* <Divider component="li" /> */}
        </React.Fragment>
      ))}
    </List>
  );
};

export default WorkoutSessions;
