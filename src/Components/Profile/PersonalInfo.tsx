import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography, { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import { globalContext } from "../../Store/Index";
import { UserProfile } from "../../Services/Types";
import { AntSwitch } from "../Base/AntSwitch";

interface PersonalInfoProp {
  headerVariant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
}

const PersonalInfo = ({ headerVariant }: PersonalInfoProp) => {
  const { globalState } = useContext(globalContext);
  const [userProfile, setUserProfile] = React.useState<UserProfile>(
    globalState.userProfile
  );

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Typography component="h1" variant={headerVariant || "h6"} align="center">
        Personal Information
      </Typography>

      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{ width: 130, textAlign: "center", float: "left", backgroundColor: userProfile.gender === "M" ? "#639fe0" : "#fff" }}
          >
            <MaleIcon sx={{ fontSize: 85 }} />
            <Typography component="p" align="center">
              Male
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{ width: 130, textAlign: "center", float: "left", backgroundColor: userProfile.gender === "F" ? "#639fe0" : "#fff" }}
          >
            <FemaleIcon sx={{ fontSize: 85 }} />
            <Typography component="p" align="center">
              Female
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "#efefef",
              padding: 3,
              borderRadius: 5,
              position: "relative",
            }}
          >
            <Typography component="p" align="center">
              Height
            </Typography>

            <Typography component="h1" variant="h4" align="center">
              {userProfile.height}
            </Typography>

            <Slider
              defaultValue={150}
              min={140}
              max={230}
              aria-label="Default"
              valueLabelDisplay="auto"
              value={userProfile.height}
              onChange={(event: Event, newValue: any) => {
                setUserProfile({ ...userProfile, height: newValue });
              }}
            />

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ position: "absolute", bottom: 15, right: 30 }}
            >
              <Typography>ft</Typography>
              <AntSwitch
                defaultChecked
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography>cm</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            name="age"
            label="Age"
            type="number"
            id="age"
            InputProps={{
              sx: {
                height: 100,
                fontSize: 40,
                input: { textAlign: "center" },
              },
            }}
            value={userProfile.age}
            />
        </Grid>
        <Grid item xs={6} sx={{ position: "relative" }}>
          <TextField
            required
            fullWidth
            name="weight"
            label="Weight"
            type="number"
            id="weight"
            InputProps={{
              sx: {
                height: 100,
                fontSize: 40,
                input: { textAlign: "center" },
              },
            }}
            value={userProfile.weight}
            />
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ position: "absolute", bottom: 0, right: 30 }}
          >
            <Typography>lbs</Typography>
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>kg</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PersonalInfo;