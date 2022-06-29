import { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import History from "../CryptoCoins/History/History";
import { Context } from "../App";
import "./Header.css";

const Header = (props) => {
  const getContext = useContext(Context);
  const { isLoggedIn, setIsLoggedIn } = getContext[0];
  const isDarkMode = props.isDarkMode;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    setIsLoggedIn(false);
  };
  return (
    <nav
      className={`navbar navbar-dark 
        ${isDarkMode ? "bg-dark" : ""}`}
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Stack className="buttonGroup" direction="horizontal" gap={2}>
        <Button
          as="a"
          variant="outline-primary"
          onClick={() => navigate("/exchange")}
        >
          Exchange
        </Button>
        {!isLoggedIn ? (
          <Button as="a" variant="primary" onClick={() => navigate("/login")}>
            Login/SignUp
          </Button>
        ) : (
          <History />
        )}
        {isLoggedIn && (
          <Button as="a" variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Stack>
    </nav>
  );
};

export default Header;
