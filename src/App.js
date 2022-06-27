import "./App.css";
import Header from "./Header/Header";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Header islogin={isLoggedIn} />
      <p>Gurtej Changes something new change</p>
    </div>
  );
}

export default App;
