import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SVGIcon from "../Base/SVGIcon";

interface MacroResultProteinProp {
  proteinHandSize: number;
  proteinGms: number;
  macroColors: any;
}
const MacroResultProtein = ({
  proteinHandSize,
  proteinGms,
  macroColors,
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
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ minHeight: "65px" }}>
          {[...Array(proteinHandSize)].map((index) => (
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

export default MacroResultProtein;
