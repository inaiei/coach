import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import { OverridableStringUnion } from "@mui/types";
import CardSelector from "../Base/CardSelector";
import { activityLevel } from "../../Data/ActivityLevel";
import { useContext } from "react";
import { globalContext } from "../../Store/Index";
import { UserProfile } from "../../Services/Types";
import React from "react";

interface ActivityLevelProp {
  headerVariant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
}

const ActivityLevel = ({ headerVariant }: ActivityLevelProp) => {
  const { globalState } = useContext(globalContext);
  const [userProfile] = React.useState<UserProfile>(
    globalState.userProfile
  );

  return (
    <Box sx={{ mt: 1 }}>
      <Typography component="h1" variant={headerVariant || "h6"} align="center">
        Activity Level
      </Typography>

      <CardSelector items={activityLevel} selectedItem={userProfile.activityLevel}/>
    </Box>
  );
};

export default ActivityLevel;
