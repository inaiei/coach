import Box from "@mui/material/Box";
import Typography, {
  TypographyPropsVariantOverrides,
} from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import CardSelector from "../Base/CardSelector";
import { UserProfile } from "../../Services/Types";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "../../Store/Index";

interface GoalProp {
  headerVariant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
  userProfile: UserProfile;
  setUserProfile: (userProfile: UserProfile) => void;
}

const Goal = ({ headerVariant, userProfile, setUserProfile }: GoalProp) => {
  const { globalState } = useContext(globalContext);
  const [selectedGoal, setSelectedGoal] = useState<any>();

  useEffect(() => {
    setSelectedGoal(globalState.goals.find(goal => goal.id === globalState.userProfile.goalId))
  }, [globalState.goals, globalState.userProfile.goalId])

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Typography component="h1" variant={headerVariant || "h6"} align="center">
        Goal
      </Typography>

      <CardSelector
        items={globalState.goals}
        selectedItem={selectedGoal}
        onChange={(newValue) => {
          setSelectedGoal(globalState.goals.find(goal => goal.id === newValue?.id))
          setUserProfile({ ...userProfile, goalId: newValue?.id });
        }}
      />
    </Box>
  );
};
export default Goal;
