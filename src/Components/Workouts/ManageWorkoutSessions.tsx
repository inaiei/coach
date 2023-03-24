import { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { WorkoutSession } from "../../Services/Types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Media, Video } from "@vidstack/player-react";
import Sessions from "./Sessions";

interface WorkoutSessionsProps {
  sessions?: WorkoutSession[];
}

const ManageWorkoutSessions = ({ sessions }: WorkoutSessionsProps) => {
  const [openSessionsModal, setOpenSessionsModal] = useState<boolean>(false);

  return (
    <Fragment>
      <Typography component="h1" variant="h6">
        Sessions

        <Button variant="outlined" size="small" sx={{ float: 'right' }} onClick={() => {
          setOpenSessionsModal(true)
        }}>
          Add session
        </Button>
      </Typography>

      <List sx={{ width: "100%" }}>
        {sessions?.map((session, index) => (
          <ListItem key={"session-" + index}
            sx={{ paddingLeft: 0, paddingRight: 0 }}
            alignItems="flex-start"
          >
            <Card>
              <CardContent>
                <Typography component="p" sx={{ fontWeight: 'bold' }}>
                  {session.title}
                </Typography>

                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {session.time}
                </Typography>
                {" - " + session.description}

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

              </CardContent>
              <CardActions sx={{
                alignSelf: "stretch",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}>
                <Button size="small">Remove</Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>

      <Sessions open={openSessionsModal} onSelected={(session)=> {
        setOpenSessionsModal(false)
      }}/>
    </Fragment>
  );
};

export default ManageWorkoutSessions;
