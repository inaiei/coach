import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SVGIcon from "../Base/SVGIcon";

interface MacroResultVeggiesProp {
  macroColors: any;
  veggiesHandSize: number;
}
const MacroResultVeggies = ({
  macroColors,
  veggiesHandSize,
}: MacroResultVeggiesProp) => {
  return (
    <Grid item xs={12}>
      <Grid container spacing="5">
        <Grid item xs={3}>
          <SVGIcon url="/Images/fist.svg" />
        </Grid>
        <Grid item xs={9}>
          <Typography component="h1" variant="macro-h6">
            4 to 6 fist-sized portions of{" "}
            <span style={{ color: macroColors.veggies }}>veggies</span> per day
          </Typography>
          <Typography component="p">
            <span style={{ color: macroColors.veggies }}>For example </span>{" "}
            Spinach, Carrots, Cauliflower, Tomatoes
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ minHeight: "65px" }}>
          {[...Array(veggiesHandSize)].map((index) => (
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
  );
};

export default MacroResultVeggies;
