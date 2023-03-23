import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import { OverridableStringUnion } from "@mui/types";
import CardSelector from "../Base/CardSelector";
import { UserProfile } from "../../Services/Types";
import React, { useContext, useEffect, useState } from "react";
import { globalContext } from "../../Store/Index";

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
  const { globalState } = useContext(globalContext);
  const [selectedActivityLevel, setSelectedActivityLevel] = useState<any>();

  useEffect(() => {
    setSelectedActivityLevel(
      globalState.activityLevels.find(
        (activityLevel) =>
          activityLevel.id === globalState.userProfile.activityLevelId
      )
    );
  }, [globalState.activityLevels, globalState.userProfile.activityLevelId]);

  return (
    <Box sx={{ mt: 1 }}>
      <Typography component="h1" variant={headerVariant || "h6"} align="center">
        Activity Level
      </Typography>

      <CardSelector
        items={globalState.activityLevels}
        selectedItem={selectedActivityLevel}
        onChange={(newValue: any) => {
          setSelectedActivityLevel(globalState.activityLevels.find(
            (activityLevel) => activityLevel.id === newValue.id
          ));
          setUserProfile({ ...userProfile, activityLevelId: newValue.id });
        }}
      />
    </Box>
  );
};

export default ActivityLevel;
