// import react, { memo, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "./Header.css";

const Header = (props) => {
  const isLoggedIn = props.islogin;
  const isDarkMode = props.isDarkMode;

  return (
    <nav
      className={`navbar navbar-dark 
        ${isDarkMode ? "bg-dark" : ""}`}
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Stack className="buttonGroup" direction="horizontal" gap={2}>
        <Button as="a" variant="outline-primary">
          Exchange
        </Button>
        <Button as="a" variant="primary">
          {isLoggedIn ? "Login/SignUp" : "History"}
        </Button>
      </Stack>
    </nav>
  );
};

export default Header;
