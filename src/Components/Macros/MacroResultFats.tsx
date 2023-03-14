import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SVGIcon from "../Base/SVGIcon";

interface MacroResultFatsProp {
  fatHandSize: number;
  fatGms: number;
  macroColors: any;
}
const MacroResultProtein = ({
  fatHandSize,
  fatGms,
  macroColors,
}: MacroResultFatsProp) => {
  return (
    <Grid item xs={12}>
      <Grid container spacing="3">
        <Grid item xs={3}>
          <SVGIcon url="/Images/thumb.svg" />
        </Grid>
        <Grid item xs={9}>
          <Typography component="h1" variant="macro-h6">
            {fatHandSize} thumb-sized portions - {fatGms}g of healthy{" "}
            <span style={{ color: macroColors.fat }}>fats</span> per day
          </Typography>
          <Typography component="p">
            <span style={{ color: macroColors.fat }}>For example </span> Olive
            oil, Walnuts, Guacamole, Flax seeds
          </Typography>

          <Box sx={{ minHeight: "65px" }}>
            {[...Array(fatHandSize)].map((index) => (
              <SVGIcon
                key={index}
                url="/Images/tick-square.svg"
                width="14"
                style={{ float: "left" }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MacroResultProtein;
