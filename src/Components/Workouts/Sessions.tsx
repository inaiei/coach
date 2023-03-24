import { useContext, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { WorkoutSession } from "../../Services/Types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Media, Video } from "@vidstack/player-react";
import { globalContext } from "../../Store/Index";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface ManageWorkoutSessionsProps {
  open: boolean
  onSelected?: (session: WorkoutSession) => void
}

interface ChipData {
  key: number;
  label: string;
}

const Sessions = ({ open, onSelected }: ManageWorkoutSessionsProps) => {
  const [chipData] = useState<readonly ChipData[]>([
    { key: 0, label: 'Lose weight' },
    { key: 4, label: 'Moderate' },
  ]);

  const { globalState } = useContext(globalContext);
  const [sessions, setSessions] = useState<WorkoutSession[]>();

  useEffect(() => {
    setSessions(globalState.sessions)
  }, [globalState.sessions])

  return (
    <Dialog onClose={() => { }} open={open}>
      <DialogTitle>Sessions</DialogTitle>

      <Stack direction="row" spacing={1} sx={{ paddingLeft: '15px', paddingRight: '15px', flexWrap: 'wrap', gap: 1 }}>
        {chipData.map((tag) => (
          <Chip label={tag.label} size="small" key={`filter-tag-${tag}`}/>
        ))}
      </Stack>

      <List sx={{ width: "100%" }}>
        {sessions?.map((session, index) => (
          <ListItem key={"session-" + index}
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

                <Stack direction="row" spacing={1} sx={{  flexWrap: 'wrap', gap: 1 }}>
                  {session.tags.map((tag, index) => (
                    <Chip label={tag} size="small" key={`tag-${index}`} sx={{marginLeft:0}}/>
                  ))}
                </Stack>

              </CardContent>
              <CardActions sx={{
                alignSelf: "stretch",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}>
                <Button size="small" onClick={() => { if (onSelected) onSelected(session) }}>Add Session</Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default Sessions;
