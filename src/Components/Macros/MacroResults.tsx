import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import useMacroProportions, {
  handSizeRatios,
  macroColors,
  macroRatios,
} from "../../Hooks/useMacroProportions";
import { globalContext } from "../../Store/Index";
import MacroProtions from "./MacroProtions";
import MacroResultCarb from "./MacroResultCarb";
import MacroResultFats from "./MacroResultFats";
import MacroResultProtein from "./MacroResultProtein";
import MacroResultVeggies from "./MacroResultVeggies";

const MacroResults = () => {
  const { globalState } = useContext(globalContext);
  const {
    proteinGms,
    carbsGms,
    fatGms,
    proteinHandSize,
    carbsHandSize,
    fatHandSize,
  } = useMacroProportions(globalState.userProfile);

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
