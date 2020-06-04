import React from "react";
import styled from "styled-components";
import firebase from "../firebase";

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
  background-image: url("/images/btn_google_signin_light_normal_web.png");
  background-repeat: no-repeat;
  width: 195px;
  height: 45px;
`;

const GoogleLogin = () => {
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ hd: "relationsgroup.co.jp" });
    firebase.auth().signInWithRedirect(provider);
  };

  return (
    <StyledDiv>
      <StyledButton onClick={login}></StyledButton>
    </StyledDiv>
  );
};

export default GoogleLogin;
