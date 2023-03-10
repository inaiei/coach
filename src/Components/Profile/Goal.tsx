import Box from "@mui/material/Box";
import Typography, {
  TypographyPropsVariantOverrides,
} from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import { goals } from "../../Data/Goals";
import CardSelector from "../Base/CardSelector";
import React, { useContext } from "react";
import { UserProfile } from "../../Services/Types";
import { globalContext } from "../../Store/Index";

interface GoalProp {
  headerVariant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
}

const Goal = ({ headerVariant }: GoalProp) => {
  const { globalState } = useContext(globalContext);
  const [userProfile, setUserProfile] = React.useState<UserProfile>(
    globalState.userProfile
  );

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Typography component="h1" variant={headerVariant || "h6"} align="center">
        Goal
      </Typography>

      <CardSelector items={goals} selectedItem={userProfile.goal}/>
    </Box>
  );
};
export default Goal;
