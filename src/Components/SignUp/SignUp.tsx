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

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });

    navigate(Routers.signupPersonalInfo);
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

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
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
                >
                  <MenuItem value={"M"}>Australia</MenuItem>
                  <MenuItem value={"F"}>Brazil</MenuItem>
                  <MenuItem value={"O"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={8}>
              <TextField
                autoComplete="phoneNumber"
                name="phoneNumber"
                required
                fullWidth
                id="phoneNumber"
                label="Phone number"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the terms and conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item></Grid>
          </Grid>
        </Box>
      </Container>
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
    </React.Fragment>
  );
}

export default SignUp;