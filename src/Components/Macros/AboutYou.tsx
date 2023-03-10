import React, { Fragment, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import Paper from "@mui/material/Paper";
import { globalContext } from "../../Store/Index";

const PersonalInfo = () => {
  const { globalState } = useContext(globalContext);

  return (
    <Box sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5" align="center">
        About you
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#edebeb",
              textAlign: "center",
            }}
          >
            {globalState.userProfile?.gender === "M" ? (
              <Fragment>
                <MaleIcon sx={{ fontSize: 60 }} />
                <Typography component="p" align="center">
                  Male
                </Typography>
              </Fragment>
            ) : (
              <Fragment>
                <FemaleIcon sx={{ fontSize: 65 }} />
                <Typography component="p" align="center">
                  Female
                </Typography>
              </Fragment>
            )}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ backgroundColor: "#edebeb" }}>
            <Typography component="p" align="center">
              Age
            </Typography>
            <Typography component="h1" variant="h2" align="center">
              {globalState.userProfile?.age}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ backgroundColor: "#edebeb" }}>
            <Typography component="p" align="center">
              Weight
            </Typography>
            <Typography component="h1" variant="h2" align="center">
              {globalState.userProfile?.weight}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ backgroundColor: "#edebeb" }}>
            <Typography component="p" align="center">
              Height
            </Typography>
            <Typography component="h1" variant="h2" align="center">
              {globalState.userProfile?.height}
            </Typography>
          </Paper>
        </Grid>
        {/* <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#edebeb",
              textAlign: "center",
            }}
          >
            {globalState.userProfile?.activityLevel?.image && (
              <SVGIcon url={globalState.userProfile?.activityLevel?.image} width="40" />
            )}
            <Typography component="p" align="center">
              {globalState.userProfile?.activityLevel?.title}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#edebeb",
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            {globalState.userProfile?.goal?.image && (
              <SVGIcon url={globalState.userProfile?.goal?.image} width="40" />
            )}
            <Typography component="p" align="center">
              {globalState.userProfile?.goal?.title}
            </Typography>
          </Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
