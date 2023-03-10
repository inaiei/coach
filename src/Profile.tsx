import ContactDetails from "./Components/Profile/ContactDetails";
import PersonalInfo from "./Components/Profile/PersonalInfo";
import Button from "@mui/material/Button";
import Goal from "./Components/Profile/Goal";
import ActivityLevel from "./Components/Profile/ActivityLevel";
import Grid from "@mui/material/Grid";
import MainContainer from "./DefaultContainer";

const Profile = () => {
  //const navigate = useNavigate();

  // const { globalState, dispatch } = useContext(globalContext);

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   await saveProfile(userProfile).then(() => {
  //     dispatch({ type: "SAVE_USER_PROFILE", payload: userProfile });
  //     navigate("/profile");
  //   });
  // };

  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactDetails />
        </Grid>
        <Grid item xs={12} md={6}>
          <PersonalInfo />
        </Grid>
      </Grid>
      <Goal />
      <ActivityLevel />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Save
      </Button>
    </MainContainer>
  );
}

export default Profile;