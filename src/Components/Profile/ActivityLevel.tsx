import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import { OverridableStringUnion } from "@mui/types";
import CardSelector from "../Base/CardSelector";
import { activityLevel } from "../../Data/ActivityLevel";
import { UserProfile } from "../../Services/Types";
import React from "react";

interface ActivityLevelProp {
  headerVariant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
  userProfile: UserProfile;
  setUserProfile: (userProfile: UserProfile) => void;
}

const ActivityLevel = ({
  headerVariant,
  userProfile,
  setUserProfile,
}: ActivityLevelProp) => {
  return (
    <Box sx={{ mt: 1 }}>
      <Typography component="h1" variant={headerVariant || "h6"} align="center">
        Activity Level
      </Typography>

      <CardSelector
        items={activityLevel}
        selectedItem={userProfile.activityLevel}
        onChange={(newValue: any) => {
          setUserProfile({ ...userProfile, activityLevel: newValue });
        }}
      />
    </Box>
  );
};

export default ActivityLevel;
