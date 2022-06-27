import "./App.css";
import Header from "./Header/Header";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Header islogin={isLoggedIn} />
    </div>
  );
}

export default App;
