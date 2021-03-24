import "./Style.css";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;
