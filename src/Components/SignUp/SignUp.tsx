import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem";
import GoogleSignUpButton from "./GoogleSignUpButton";
import FacebookSignUpButton from "./FacebookSignUpButton";
import Link from "@mui/material/Link";
import Routers from "../../Routers";
import { useContext } from "react";
import { globalContext } from "../../Store/Index";
import { UserProfile } from "../../Services/Types";
import { countries } from "../../Data/Countries";
import { Method, useFetch } from "../../Hooks/useFetch";
import { endpoints } from "../../Services/Endpoints";

const SignUp = () => {
  const navigate = useNavigate();
  const fetch = useFetch();

  const { dispatch } = React.useContext(globalContext);
  const { globalState } = useContext(globalContext);

  const [termsAndConditions, setTermsAndConditions] =
    React.useState<boolean>(false);
  const [userProfile, setUserProfile] = React.useState<UserProfile>(
    globalState.userProfile
  );

  const onSubmit = () => {
    fetch(endpoints.saveProfile, Method.Post, userProfile).then(() => {
      dispatch({ type: "SET_USER_PROFILE", payload: userProfile });
      navigate(Routers.signupPersonalInfo);
    });
  };

  return (
    <React.Fragment>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ bgcolor: "common.white", borderRadius: "15px" }}
      >
        <Typography component="h1" variant="h5" align="center">
          Start working out today
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <GoogleSignUpButton />
          <FacebookSignUpButton />
        </Box>
        <Typography component="p" variant="lineThrough">
          or
        </Typography>

        <Box component="div" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={userProfile.email}
                onChange={(e) => {
                  setUserProfile({ ...userProfile, email: e.target.value });
                }}
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
                value={userProfile.password}
                onChange={(e) => {
                  setUserProfile({ ...userProfile, password: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                value={userProfile.name}
                onChange={(e) => {
                  setUserProfile({ ...userProfile, name: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  fullWidth
                  labelId="country-label"
                  id="country"
                  label="Country"
                  value={userProfile?.country?.iso}
                  onChange={(e) => {
                    const selectCountry = countries.find(
                      (country) => country.iso === e.target.value
                    );
                    setUserProfile({
                      ...userProfile,
                      country: selectCountry,
                    });
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem value={country.iso} key={country.iso}>
                      {country.iso}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={8}>
              <TextField
                autoComplete="mobile"
                name="mobile"
                required
                fullWidth
                id="mobile"
                label="Mobile"
                value={userProfile.mobile}
                onChange={(e) => {
                  setUserProfile({ ...userProfile, mobile: e.target.value });
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the terms and conditions."
                value={termsAndConditions}
                onChange={(e) => {
                  setTermsAndConditions(!termsAndConditions);
                }}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onSubmit}
          >
            Sign Up
          </Button>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 5 }}
          >
            Already have an account? &nbsp;
            <Link component={RouterLink} to="/" variant="body2">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default SignUp;
