import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link/Link";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { countries } from "../../Data/Countries";
import { UserProfile } from "../../Services/Types";

interface ContactDetailsProp {
  userProfile: UserProfile;
  setUserProfile: (userProfile: UserProfile) => void;
}

const ContactDetails = ({
  userProfile,
  setUserProfile,
}: ContactDetailsProp) => {
  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Avatar
          src={userProfile?.picture}
          sx={{ width: 80, height: 80, marginTop: 2 }}
        ></Avatar>
        <Link>Edit photo</Link>
      </Box>
      <Typography component="h1" variant="h6" align="center">
        Contact details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="name"
            label="Name"
            id="name"
            autoComplete="name"
            value={userProfile?.name}
            autoFocus
            onChange={(e) => {
              setUserProfile({ ...userProfile, name: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            id="email"
            autoComplete="email"
            value={userProfile?.email}
            onChange={(e) => {
              setUserProfile({ ...userProfile, email: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={4}>
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
        <Grid item xs={8}>
          <TextField
            required
            fullWidth
            name="mobile"
            label="Mobile"
            id="mobile"
            autoComplete="mobile"
            value={userProfile?.mobile}
            onChange={(e) => {
              setUserProfile({ ...userProfile, mobile: e.target.value });
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactDetails;
