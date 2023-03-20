import Box from "@mui/material/Box";
import Typography, {
  TypographyPropsVariantOverrides,
} from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import { goals } from "../../Data/Goals";
import CardSelector from "../Base/CardSelector";
import { UserProfile } from "../../Services/Types";

interface GoalProp {
  headerVariant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
  userProfile: UserProfile;
  setUserProfile: (userProfile: UserProfile) => void;
}

const Goal = ({ headerVariant, userProfile, setUserProfile }: GoalProp) => {
  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Typography component="h1" variant={headerVariant || "h6"} align="center">
        Goal
      </Typography>

      <CardSelector
        items={goals}
        selectedItem={userProfile.goal}
        onChange={(newValue) => {
          setUserProfile({ ...userProfile, goal: newValue });
        }}
      />
    </Box>
  );
};
export default Goal;
