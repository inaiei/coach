import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Workout } from "../../Services/Types";

interface ManageMyWorkoutProp {
  workout?: Workout;
}

const ManageMyWorkout = ({
  workout
}: ManageMyWorkoutProp) => {
  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Typography component="h1" variant="h6" align="center">
        Workout
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="title"
            label="Title"
            id="title"
            value={workout?.title}
            autoFocus
            onChange={(e) => {
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Description"
            name="description"
            id="description"
            value={workout?.description}
            multiline
            rows={4}
            onChange={(e) => {
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="country-label">Day of the week</InputLabel>
            <Select
              fullWidth
              labelId="dayOfWeek"
              id="dayOfWeek"
              label="Day of the week"
              value={workout?.dayOfWeek}
            >
              <MenuItem value="Mon">Monday</MenuItem>
              <MenuItem value="Tue">Tuesday</MenuItem>
              <MenuItem value="Wed">Wednesday</MenuItem>
              <MenuItem value="Thu">Thursday</MenuItem>
              <MenuItem value="Fri">Friday</MenuItem>
              <MenuItem value="Sat">Saturday</MenuItem>
              <MenuItem value="Sun">Sunday</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManageMyWorkout;
