import ContactDetails from "./Components/Profile/ContactDetails";
import PersonalInfo from "./Components/Profile/PersonalInfo";
import Button from "@mui/material/Button";
import Goal from "./Components/Profile/Goal";
import ActivityLevel from "./Components/Profile/ActivityLevel";
import Grid from "@mui/material/Grid";
import MainContainer from "./DefaultContainer";
import { useContext, useState } from "react";
import { UserProfile } from "./Services/Types";
import { globalContext } from "./Store/Index";
import { useNavigate } from "react-router-dom";
import { endpoints } from "./Services/Endpoints";
import { Method, useFetch } from "./Hooks/useFetch";
import Routers from "./Routers";

const Profile = () => {
  const navigate = useNavigate();
  const fetch = useFetch();

  const { globalState } = useContext(globalContext);
  const { dispatch } = useContext(globalContext);

  const [userProfile, setUserProfile] = useState<UserProfile>(
    globalState.userProfile
  );

  const onSave = () => {
    fetch(endpoints.saveProfile, Method.Post, userProfile).then(() => {
      dispatch({ type: "SET_USER_PROFILE", payload: userProfile });
      navigate(Routers.default);
    });
  };

  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactDetails
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
          <PersonalInfo
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Goal userProfile={userProfile} setUserProfile={setUserProfile} />
          <ActivityLevel
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={onSave}
      >
        Save
      </Button>
    </MainContainer>
  );
};

export default Profile;
