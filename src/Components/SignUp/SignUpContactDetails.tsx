import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ContactDetails from "../Profile/ContactDetails";
import Routers from "../../Routers";

const SignUpContactDetails = () => {
  const navigate = useNavigate();

  // const { globalState, dispatch } = useContext(globalContext);

  const handleSubmit = async () => {
    navigate(Routers.signupPersonalInfo);

    // await saveProfile(userProfile).then(() => {
    //   dispatch({ type: "SAVE_USER_PROFILE", payload: userProfile });
    //   navigate(Routers.profile);
    // });
  };

  return (
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "common.white", borderRadius: "15px" }}
      >
        <ContactDetails />

        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Next
          </Button>
      </Container>
  );
}

export default  SignUpContactDetails;