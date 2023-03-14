import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Macros } from "../../Services/Types";
import Checkbox from "../Base/Checkbox";
import SVGIcon from "../Base/SVGIcon";

interface MacroResultProteinProp {
  proteinHandSize: number;
  proteinGms: number;
  macroColors: any;
  macros: Macros;
}
const MacroResultProtein = ({
  proteinHandSize,
  proteinGms,
  macroColors,
  macros,
}: MacroResultProteinProp) => {
  return (
    <Grid item xs={12}>
      <Grid container spacing="3">
        <Grid item xs={3}>
          <SVGIcon url="/Images/hand-palm.svg" />
        </Grid>
        <Grid item xs={9}>
          <Typography component="h1" variant="macro-h6">
            {proteinHandSize} palm-sized portions - {proteinGms}g of{" "}
            <span style={{ color: macroColors.protein }}>protein</span> per day
          </Typography>
          <Typography component="p">
            <span style={{ color: macroColors.protein }}>For example </span>
            Chicken, Tofu, Fish and Greek yogurt
          </Typography>

          <Box sx={{ minHeight: "65px" }}>
            {macros.protein.map((portion, index) => (
              <Checkbox
                key={index}
                selected={portion}
                onChange={(newValue) => {
                  // dailyMacro[index] = newValue;
                  // setDailyMacro(dailyMacro)
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MacroResultProtein;
