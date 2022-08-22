// import { red } from '@mui/material/colors';
// import { Button } from '@mui/material';

import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const headerStyle = {
  backgroundColor: "#F7F6F8",
  height: "64px",
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  height: "24px",
};

function Header() {
  return (
    <div style={headerStyle}>
      <Link to="/">
        <img src={logo} style={logoStyle} alt="logo" />
      </Link>
    </div>
  );
}

export default Header;
