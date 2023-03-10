import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PerosnalInfo from "../Profile/PersonalInfo";
import Routers from "../../Routers";

const SignUpPersonalInfo = () => {
  const navigate = useNavigate();

  const handleBack = async () => {
    navigate(Routers.signupContact);
  }

  const handleNext = async () => {
    navigate(Routers.signupGoal);
  };

  return (
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "common.white", borderRadius: "15px" }}
      >
        <PerosnalInfo headerVariant="h5" />

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

export default SignUpPersonalInfo;