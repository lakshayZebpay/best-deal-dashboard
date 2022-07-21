import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import React, { useEffect, useState } from "react";
import CryptoCoins from "./CryptoCoins/CryptoCoins";
import { Login } from "./login/login";
import { Signup } from "./signup/signup";

export const Context = React.createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("isLoggedIn")
  );
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      const token = window.localStorage.getItem("token");
      getUserData(token);
    } else {
      setUserData({});
    }
  }, [isLoggedIn]);

  async function getUserData(token) {
    const response = await fetch("http://localhost:1337/user", {
      method: "GET",
      headers: new Headers({
        token: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    });
    const data = await response.json();

    if (data) {
      setUserData(data.userData);
    } else {
      console.log("couldn't get user data");
    }
  }

  return (
    <Context.Provider
      value={[
        { isLoggedIn, setIsLoggedIn },
        { userData, setUserData },
      ]}
    >
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<CryptoCoins />} />
            <Route path="/exchange" element={<CryptoCoins />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
