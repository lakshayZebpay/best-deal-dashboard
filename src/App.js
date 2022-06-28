import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import { useState } from "react";
import CryptoCoins from "./CryptoCoins/CryptoCoins";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
<<<<<<< HEAD
      <Header islogin={isLoggedIn} />
      <p> random Change </p>
=======
      <Router>
        <Header islogin={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<CryptoCoins />} />
          <Route path="/exchange" element={<CryptoCoins />} />
          <Route path="/login" element={<p>aa</p>} />
        </Routes>
      </Router>
>>>>>>> 81863d2addaeaa0b74c6e8857cad07b146fb312f
    </div>
  );
}

export default App;
