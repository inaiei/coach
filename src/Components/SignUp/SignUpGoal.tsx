import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Goal from "../Profile/Goal";
import Routers from "../../Routers";

const SignUpGoal = () => {
  const navigate = useNavigate();

  const handleBack = async () => {
    navigate(Routers.signupPersonalInfo);
  }

  const handleNext = async () => {
    navigate(Routers.signupActivityLevel);
  };

  return (
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "common.white", borderRadius: "15px" }}
      >
        <Goal headerVariant="h5" />

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
              onClick={handleNext}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Container>
  );
}

export default SignUpGoal;