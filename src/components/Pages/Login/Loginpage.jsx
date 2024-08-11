import React from 'react'
import "./styles.css"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
function Loginpage() {
  
const login = useGoogleLogin({
  onSuccess: tokenResponse => console.log(tokenResponse),
});
  return (
    <GoogleLogin
    onSuccess={credentialResponse => {
      const credentialResponseDecoded = jwtDecode(
        credentialResponse.credential
      );
    
      console.log(credentialResponseDecoded);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
  );
}

export default Loginpage