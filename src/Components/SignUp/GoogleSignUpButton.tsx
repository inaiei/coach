import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { globalContext } from "../../Store/Index";
import { GoogleProfile } from "../../Services/Types";
import { googleSignUp } from "../../Services/AuthenticationService";
import Routers from "../../Routers";

const GoogleSignUpButton = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(globalContext);
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  if (googleClientId === undefined) {
    return (null);
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GoogleLogin
        width="210"
        text="signup_with"
        context="signup"
        logo_alignment="left"
        onSuccess={async (credentialResponse) => {
          const profile: GoogleProfile = jwt_decode(
            credentialResponse.credential || ""
          );
          await googleSignUp(profile).then(() => {
            dispatch({ type: "GOOGLE_SIGNUP", payload: profile });
            navigate(Routers.signupContact);
          });
        }}
        onError={() => {
          alert("boo");
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleSignUpButton;
//https://www.npmjs.com/package/@react-oauth/google
