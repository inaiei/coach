import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid/Grid";
import ActivityLevel from "../Profile/ActivityLevel";
import Routers from "../../Routers";
import { Method, useFetch } from "../../Hooks/useFetch";
import { useContext, useState } from "react";
import { globalContext } from "../../Store/Index";
import { UserProfile } from "../../Services/Types";
import { endpoints } from "../../Services/Endpoints";

const SignUpActivityLevel = () => {
  const navigate = useNavigate();
  const fetch = useFetch();

  const { dispatch } = useContext(globalContext);
  const { globalState } = useContext(globalContext);

  const [userProfile, setUserProfile] = useState<UserProfile>(
    globalState.userProfile
  );

  const onBack = async () => {
    // todo check if data has changed and ask if user wants to proceed
    navigate(Routers.signupGoal);
  };

  const onFinish = async () => {
    fetch(endpoints.saveProfile, Method.Post, userProfile).then(() => {
      dispatch({ type: "SET_USER_PROFILE", payload: userProfile });
      navigate(Routers.default);
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ borderRadius: 2 }}>
      <ActivityLevel
        userProfile={userProfile}
        setUserProfile={setUserProfile}
        headerVariant="h5"
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onBack}
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
            onClick={onFinish}
          >
            Finish
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpActivityLevel;
