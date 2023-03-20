import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography, {
  TypographyPropsVariantOverrides,
} from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import { UserProfile } from "../../Services/Types";
import { AntSwitch } from "../Base/AntSwitch";

interface PersonalInfoProp {
  headerVariant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
  userProfile: UserProfile;
  setUserProfile: (userProfile: UserProfile) => void;
}

const PersonalInfo = ({
  headerVariant,
  userProfile,
  setUserProfile,
}: PersonalInfoProp) => {
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
            sx={{
              width: 130,
              textAlign: "center",
              float: "left",
              backgroundColor: userProfile.gender === "M" ? "#639fe0" : "#fff",
            }}
            onClick={() => {
              setUserProfile({ ...userProfile, gender: "M" });
            }}
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
            sx={{
              width: 130,
              textAlign: "center",
              float: "left",
              backgroundColor: userProfile.gender === "F" ? "#639fe0" : "#fff",
            }}
            onClick={() => {
              setUserProfile({ ...userProfile, gender: "F" });
            }}
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
                checked={userProfile.heightUnit === "cm"}
                inputProps={{ "aria-label": "Height unit" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUserProfile({
                    ...userProfile,
                    heightUnit: event.target.checked ? "cm" : "ft",
                  });
                }}
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
            onChange={(e) => {
              setUserProfile({ ...userProfile, age: Number(e.target.value) });
            }}
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
            onChange={(e) => {
              setUserProfile({
                ...userProfile,
                weight: Number(e.target.value),
              });
            }}
          />
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ position: "absolute", bottom: 0, right: 30 }}
          >
            <Typography>lbs</Typography>
            <AntSwitch
              checked={userProfile.weightUnit === "kg"}
              inputProps={{ "aria-label": "Weight unit" }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUserProfile({
                  ...userProfile,
                  weightUnit: event.target.checked ? "kg" : "lbs",
                });
              }}
          />
            <Typography>kg</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
