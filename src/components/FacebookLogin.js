import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";


const FacebookLogin = () => {
  return(
    <LoginSocialFacebook
        appId ="6071375239637595"

        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}


    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  )
}


export default FacebookLogin;
