import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import AddPlants from "./Components/AddPlants";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/addplants" component={AddPlants} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
