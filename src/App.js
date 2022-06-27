import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header isLoggedin={true} />
    </div>
  );
}

export default App;
