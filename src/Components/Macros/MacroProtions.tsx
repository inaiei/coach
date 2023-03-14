import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import useMacroProportions, {
  handSizeRatios,
  macroColors,
} from "../../Hooks/useMacroProportions";
import useTrackDailyMacro from "../../Hooks/useTrackDailyMacro";
import { globalContext } from "../../Store/Index";
import MacroResultCarb from "./MacroResultCarb";
import MacroResultFats from "./MacroResultFats";
import MacroResultProtein from "./MacroResultProtein";
import MacroResultVeggies from "./MacroResultVeggies";

const MacroProtions = () => {
  const { globalState } = useContext(globalContext);

  const {
    proteinGms,
    carbsGms,
    fatGms,
    proteinHandSize,
    carbsHandSize,
    fatHandSize,
  } = useMacroProportions(globalState.userProfile);

  const { dailyMacro } = useTrackDailyMacro(
    globalState.userProfile?.macros,
    proteinHandSize,
    handSizeRatios.veggies,
    carbsHandSize,
    fatHandSize
  );

  return (
    <Grid container spacing={2}>
      <MacroResultProtein
        proteinHandSize={proteinHandSize}
        proteinGms={proteinGms}
        macroColors={macroColors}
        macros={dailyMacro}
      />

      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>

      <MacroResultVeggies
        macroColors={macroColors}
        veggiesHandSize={handSizeRatios.veggies}
      />

      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>

      <MacroResultCarb
        carbsHandSize={carbsHandSize}
        carbsGms={carbsGms}
        macroColors={macroColors}
      />

      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>

      <MacroResultFats
        fatHandSize={fatHandSize}
        fatGms={fatGms}
        macroColors={macroColors}
      />
    </Grid>
  );
};

export default MacroProtions;
