import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  macroColors,
  macroRatios,
} from "../../Hooks/useMacroProportions";
import MacroProtions from "./MacroProtions";

const MacroResults = () => {

  return (
    <Box sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5" align="center">
        Macro Ratios
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: macroColors.protein,
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Typography component="h1" variant="h4" align="center">
              {macroRatios.protein}%
            </Typography>

            <Typography component="p" align="center">
              Protein
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: macroColors.carbs,
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Typography component="h1" variant="h4" align="center">
              {macroRatios.carbs}%
            </Typography>
            <Typography component="p" align="center">
              Carbs
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: macroColors.fat,
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Typography component="h1" variant="h4" align="center">
              {macroRatios.fat}%
            </Typography>
            <Typography component="p" align="center">
              Fat
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography component="h1" variant="h5" align="center">
        Daily portions
      </Typography>

      <MacroProtions />
    </Box>
  );
};

export default MacroResults;
