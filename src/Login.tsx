import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FacebookLoginButton from "./Components/Authentication/FacebookLoginButton";
import GoogleLoginButton from "./Components/Authentication/GoogleLoginButton";
import { getProfile } from "./Services/ProfileService";
import { globalContext } from "./Store/Index";
import Routers from "./Routers";
import Link from "@mui/material/Link";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = React.useContext(globalContext);

  const [email, setEmail] = React.useState<string>("");
  //  const [password, setPassword] = React.useState<string>("");

  const onLogin = async () => {
    await getProfile(email).then((userProfiles) => {
      if (userProfiles.length) {
        dispatch({ type: "SET_USER_PROFILE", payload: userProfiles[0] });
        navigate(Routers.default);
      } else {
        dispatch({ type: "SET_ERROR", payload: `User doesnt exist` });
      }
    });
  };

  return (
    <React.Fragment>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "common.white", borderRadius: 2 }}
      >
        <Typography component="h1" variant="h5" align="center">
          Login
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onLogin}
          >
            Log in
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item></Grid>
          </Grid>
        </Box>

        <Typography component="p" variant="lineThrough">
          or
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <GoogleLoginButton />
          <FacebookLoginButton />
        </Box>
      </Container>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 5 }}
      >
        Don't have an account? &nbsp;
        <Link component={RouterLink} to="/signup" variant="body2">
          Sign up
        </Link>
      </Typography>
    </React.Fragment>
  );
};

export default Login;
