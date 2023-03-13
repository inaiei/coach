import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SVGIcon from "../Base/SVGIcon";

interface MacroResultProteinProp {
  carbsHandSize: number;
  carbsGms: number;
  macroColors: any;
}
const MacroResultProtein = ({
  carbsHandSize,
  carbsGms,
  macroColors,
}: MacroResultProteinProp) => {
  return (
    <Grid item xs={12}>
      <Grid container spacing="3">
        <Grid item xs={3}>
          <SVGIcon url="/Images/hand-holding.svg" width="85" />
        </Grid>
        <Grid item xs={9}>
          <Typography component="h1" variant="macro-h6">
            {carbsHandSize} cupped handfuls - {carbsGms}g of{" "}
            <span style={{ color: macroColors.carbs }}>carbohydrates</span> per
            day
          </Typography>
          <Typography component="p">
            <span style={{ color: macroColors.carbs }}>For example </span>{" "}
            Beans, Blueberries, Sweet potatoes, Oats
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ minHeight: "65px" }}>
          {[...Array(carbsHandSize)].map((index) => (
            <SVGIcon
              key={index}
              url="/Images/tick-square-done.svg"
              width="14"
              style={{ float: "left" }}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MacroResultProtein;
