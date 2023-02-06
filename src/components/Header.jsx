import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

// import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const headerStyle = {
  backgroundColor: "#F7F6F8",
  height: "64px",
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  height: "24px",
};

function Header({action}) {
  return (
      <div style={headerStyle}>
        <Link to="/">
          <img src={logo} style={logoStyle} alt="logo" />
        </Link>
        <button onClick={action}>Sign out</button>
      </div>
  );
}

export default Header;
