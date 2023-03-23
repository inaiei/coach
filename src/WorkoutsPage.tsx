import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import MyWorkouts from "./Components/Workouts/MyWorkouts";
import DefaultContainer from "./DefaultContainer";
import Routers from "./Routers";

const WorkoutsPage = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => {
        navigate(Routers.default);
      }}
    >
      Home
    </Link>,
    <Typography key="3" color="text.primary" >
      My workouts
    </Typography>,
  ];

  return (
    <DefaultContainer breadcrumbs={breadcrumbs}>
      <MyWorkouts />
    </DefaultContainer>
  );
};

export default WorkoutsPage;
