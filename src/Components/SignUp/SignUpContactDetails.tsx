import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ContactDetails from "../Profile/ContactDetails";
import Routers from "../../Routers";
import { Method, useFetch } from "../../Hooks/useFetch";
import { useContext, useState } from "react";
import { globalContext } from "../../Store/Index";
import { UserProfile } from "../../Services/Types";
import { endpoints } from "../../Services/Endpoints";

const SignUpContactDetails = () => {
  const navigate = useNavigate();
  const fetch = useFetch();

  const { dispatch } = useContext(globalContext);
  const { globalState } = useContext(globalContext);

  const [userProfile, setUserProfile] = useState<UserProfile>(
    globalState.userProfile
  );

  const onNext = async () => {
    fetch(endpoints.saveProfile, Method.Post, userProfile).then(() => {
      dispatch({ type: "SET_USER_PROFILE", payload: userProfile });
      navigate(Routers.signupPersonalInfo);
    });
  };

  return (
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "common.white", borderRadius: "15px" }}
      >
        <ContactDetails userProfile={userProfile} setUserProfile={setUserProfile}/>

        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onNext}
          >
            Next
          </Button>
      </Container>
  );
}

export default  SignUpContactDetails;