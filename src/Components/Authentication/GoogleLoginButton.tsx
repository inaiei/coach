import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { globalContext } from "../../Store/Index";
import { GoogleProfile } from "../../Services/Types";
import { getProfile } from "../../Services/ProfileService";
import Routers from "../../Routers";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(globalContext);
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  if (googleClientId === undefined) {
    return null;
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GoogleLogin
        width="210"
        text="signin_with"
        context="signin"
        logo_alignment="left"
        onSuccess={async (credentialResponse) => {
          const profile: GoogleProfile = jwt_decode(
            credentialResponse.credential || ""
          );
          await getProfile(profile.email).then((userProfile) => {
            dispatch({ type: "SET_USER_PROFILE", payload: userProfile });
            navigate(Routers.default);
          });
        }}
        onError={() => {
          alert("boo");
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
  // return (
  //     <Button variant="google">Log in with Google</Button>
  // );
};

export default GoogleLoginButton;
