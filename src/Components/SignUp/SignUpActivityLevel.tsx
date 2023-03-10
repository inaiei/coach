import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid/Grid";
import ActivityLevel from "../Profile/ActivityLevel";
import Routers from "../../Routers";

const SignUpActivityLevel = () => {
  const navigate = useNavigate();

  const handleBack = async () => {
    navigate(Routers.signupGoal);
  }

  const handleFinish = async () => {
    navigate(Routers.default);
  };

  return (
      <Container
        component="main"
        maxWidth="xs"
        sx={{  borderRadius: 2 }}
      >
        <ActivityLevel headerVariant="h5" />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleBack}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleFinish}
            >
              Finish
            </Button>
          </Grid>
        </Grid>
      </Container>
  );
}

export default SignUpActivityLevel;