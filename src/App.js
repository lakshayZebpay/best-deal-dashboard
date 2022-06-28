import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import { useState } from "react";
import CryptoCoins from "./CryptoCoins/CryptoCoins";
import { Login } from "./login/login";
import { Signup } from "./signup/signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Router>
        <Header islogin={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<CryptoCoins />} />
          <Route path="/exchange" element={<CryptoCoins />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
