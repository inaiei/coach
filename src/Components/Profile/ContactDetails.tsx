import React from "react";
import { useContext } from "react";
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
import { globalContext } from "../../Store/Index";
import { UserProfile } from "../../Services/Types";
import {countries} from "../../Data/Countries";

const ContactDetails = () => {
  const { globalState } = useContext(globalContext);
  const [userProfile] = React.useState<UserProfile>(
    globalState.userProfile
  );


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
            >
              {countries.map((country) => (
                <MenuItem value={country.iso} key={country.iso} selected={userProfile?.country?.iso === country.iso}>{country.iso}</MenuItem>
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
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactDetails