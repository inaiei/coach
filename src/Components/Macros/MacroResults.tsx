import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "../../Store/Index";
import SVGIcon from "../Base/SVGIcon";

const macroRatios = { carbs: 35, fat: 30, protein: 35 };
const handSizeRatios = { carbs: 30, protein: 30, fat: 12, veggies: 6 };
const macroColors = {
  carbs: "#fa9d23",
  protein: "#50a3ba",
  fat: "#d9d507",
  veggies: "#107a04",
};

const MacroResults = () => {
  const { globalState } = useContext(globalContext);

  const [proteinGms, setProteinGms] = useState<number>(0);
  const [carbsGms, setCarbsGms] = useState<number>(0);
  const [fatGms, setFatGms] = useState<number>(0);
  const [calories, setCalories] = useState<number>(0);
  const [proteinHandSize, setProteinHandSize] = useState<number>(0);
  const [carbsHandSize, setCarbsHandSize] = useState<number>(0);
  const [fatHandSize, setFatHandSize] = useState<number>(0);

  useEffect(() => {
    if (globalState.userProfile.gender === "M") {
      // Males: calories/day = 10 x weight (kilograms, or kg) + 6.25 x height (centimeters, or cm) – 5 x age (years) + 5
      setCalories(
        (10 * globalState.userProfile?.weight +
          6.25 * globalState.userProfile?.height -
          (5 * globalState.userProfile?.age + 5)) *
          (globalState.userProfile?.activityLevel?.factor || 1.2)
      );
    } else {
      // Females: calories/day = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) – 161
      setCalories(
        (10 * globalState.userProfile?.weight +
          6.25 * globalState.userProfile?.height -
          (5 * globalState.userProfile?.age - 161)) *
          (globalState.userProfile?.activityLevel?.factor || 1.2)
      );
    }

    setCarbsGms(Math.floor((calories * macroRatios.carbs) / 100 / 4));
    setFatGms(Math.floor((calories * macroRatios.fat) / 100 / 9));
    setProteinGms(Math.floor((calories * macroRatios.protein) / 100 / 4));

    setProteinHandSize(Math.ceil(proteinGms / handSizeRatios.protein));
    setCarbsHandSize(Math.ceil(carbsGms / handSizeRatios.carbs));
    setFatHandSize(Math.ceil(fatGms / handSizeRatios.fat));
  }, [
    globalState.userProfile.gender,
    globalState.userProfile.weight,
    globalState.userProfile.height,
    globalState.userProfile.age,
    globalState.userProfile.activityLevel?.factor,
    calories,
    proteinGms,
    carbsGms,
    fatGms,
  ]);

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

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing="3">
            <Grid item xs={3}>
              <SVGIcon url="/Images/hand-palm.svg" />
            </Grid>
            <Grid item xs={9}>
              <Typography component="h1" variant="macro-h6">
                {proteinHandSize} palm-sized portions - {proteinGms}g of{" "}
                <span style={{ color: macroColors.protein }}>protein</span> per
                day
              </Typography>
              <Typography component="p">
                <span style={{ color: macroColors.protein }}>For example </span>
                Chicken, Tofu, Fish and Greek yogurt
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing="5">
            <Grid item xs={3}>
              <SVGIcon url="/Images/fist.svg" />
            </Grid>
            <Grid item xs={9}>
              <Typography component="h1" variant="macro-h6">
                4 to 6 fist-sized portions of{" "}
                <span style={{ color: macroColors.veggies }}>veggies</span> per
                day
              </Typography>
              <Typography component="p">
                <span style={{ color: macroColors.veggies }}>For example </span>{" "}
                Spinach, Carrots, Cauliflower, Tomatoes
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing="3">
            <Grid item xs={3}>
              <SVGIcon url="/Images/hand-holding.svg" width="85" />
            </Grid>
            <Grid item xs={9}>
              <Typography component="h1" variant="macro-h6">
                {carbsHandSize} cupped handfuls - {carbsGms}g of{" "}
                <span style={{ color: macroColors.carbs }}>carbohydrates</span>{" "}
                per day
              </Typography>
              <Typography component="p">
                <span style={{ color: macroColors.carbs }}>For example </span>{" "}
                Beans, Blueberries, Sweet potatoes, Oats
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
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
                <span style={{ color: macroColors.fat }}>For example </span>{" "}
                Olive oil, Walnuts, Guacamole, Flax seeds
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Typography component="h1" variant="h5" align="center">
        Tracking daily portions
      </Typography>

      <Typography component="h1" variant="macro-h6" align="left">
        Protein
      </Typography>
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
      <Typography component="h1" variant="macro-h6" align="left">
          Veggies
        </Typography>
        <Box sx={{ minHeight: "65px" }}>
        {[...Array(handSizeRatios.veggies)].map((index) => (
          <SVGIcon
            key={index}
            url="/Images/tick-square.svg"
            width="14"
            style={{ float: "left" }}
          />
        ))}
      </Box>
      <Typography component="h1" variant="macro-h6" align="left">
          Carbs
        </Typography>
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
      <Typography component="h1" variant="macro-h6" align="left">
          Fat
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
    </Box>
  );
};

export default MacroResults;
