import { useState, useEffect } from 'react';
import { UserProfile } from '../Services/Types';

export const macroRatios = { carbs: 35, fat: 30, protein: 35 };
export const handSizeRatios = { carbs: 30, protein: 30, fat: 12, veggies: 6 };
export const macroColors = {
  carbs: "#fa9d23",
  protein: "#50a3ba",
  fat: "#d9d507",
  veggies: "#107a04",
};

const useMacroProportions = (userProfile: UserProfile) => {
  const [proteinGms, setProteinGms] = useState<number>(0);
  const [carbsGms, setCarbsGms] = useState<number>(0);
  const [fatGms, setFatGms] = useState<number>(0);
  const [calories, setCalories] = useState<number>(0);
  const [proteinHandSize, setProteinHandSize] = useState<number>(0);
  const [carbsHandSize, setCarbsHandSize] = useState<number>(0);
  const [fatHandSize, setFatHandSize] = useState<number>(0);


  useEffect(() => {
    if (userProfile?.gender === "M") {
      // Males: calories/day = 10 x weight (kilograms, or kg) + 6.25 x height (centimeters, or cm) – 5 x age (years) + 5
      setCalories(
        (10 * userProfile?.weight +
          6.25 * userProfile?.height -
          (5 * userProfile?.age + 5)) *
        (userProfile?.activityLevel?.factor || 1.2)
      );
    } else {
      // Females: calories/day = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) – 161
      setCalories(
        (10 * userProfile?.weight +
          6.25 * userProfile?.height -
          (5 * userProfile?.age - 161)) *
        (userProfile?.activityLevel?.factor || 1.2)
      );
    }

    setCarbsGms(Math.floor((calories * macroRatios.carbs) / 100 / 4));
    setFatGms(Math.floor((calories * macroRatios.fat) / 100 / 9));
    setProteinGms(Math.floor((calories * macroRatios.protein) / 100 / 4));

    setProteinHandSize(Math.ceil(proteinGms / handSizeRatios.protein));
    setCarbsHandSize(Math.ceil(carbsGms / handSizeRatios.carbs));
    setFatHandSize(Math.ceil(fatGms / handSizeRatios.fat));
  }, [
    userProfile,
    calories,
    proteinGms,
    carbsGms,
    fatGms]);

  return { proteinGms, carbsGms, fatGms, calories, proteinHandSize, carbsHandSize, fatHandSize };
}

export default useMacroProportions;