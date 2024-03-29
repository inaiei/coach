import { Routes, Route } from "react-router-dom";
import { GlobalStore } from "./Store/Index";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Login from "./Login";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Profile";
import SignUpContactDetails from "./Components/SignUp/SignUpContactDetails";
import SignUpPersonalInfo from "./Components/SignUp/SignUpPersonalInfo";
import SignUpGoal from "./Components/SignUp/SignUpGoal";
import SignUpActivityLevel from "./Components/SignUp/SignUpActivityLevel";
import Default from "./Default";
import theme from "./DefaultTheme";
import Routers from "./Routers";
import WorkoutPage from "./WorkoutPage";
import WorkoutsPage from "./WorkoutsPage";
import Macros from "./Macros";
import NewWorkoutPage from "./NewWorkoutPage";
import NotFound from "./NotFound";
import Error from "./Error";
import LoadData from "./LoadData";
import ManageWorkoutsPage from "./ManageWorkoutsPage";

const App = () => {
  return (
    <GlobalStore>
      <LoadData />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Box sx={{ padding: { xs: 0, sm: 2 } }}>
            <Error />
            <Routes>
              <Route path={Routers.signup} element={<SignUp />} />
              <Route
                path={Routers.signupContact}
                element={<SignUpContactDetails />}
              />
              <Route
                path={Routers.signupPersonalInfo}
                element={<SignUpPersonalInfo />}
              />
              <Route path={Routers.signupGoal} element={<SignUpGoal />} />
              <Route
                path={Routers.signupActivityLevel}
                element={<SignUpActivityLevel />}
              />
              <Route path={Routers.profile} element={<Profile />} />
              <Route path={Routers.newWorkout} element={<NewWorkoutPage />} />
              <Route path={Routers.workout} element={<WorkoutPage />} />
              <Route path={Routers.myWorkouts} element={<WorkoutsPage />} />
              <Route path={Routers.manageMyWorkouts} element={<ManageWorkoutsPage />} />
              <Route path={Routers.login} element={<Login />} />
              <Route path={Routers.default} element={<Default />} />
              <Route path={Routers.macros} element={<Macros />} />
              <Route path="/" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
    </GlobalStore>
  );
};

export default App;
