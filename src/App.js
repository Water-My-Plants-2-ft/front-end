import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import AddPlants from "./Components/AddPlants";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import MyAccount from "./Components/MyAccount";
import MyPlants from "./Components/MyPlants";
import Profile from "./Components/Profile";
import EditPlant from "./Components/EditPlant";
import EditAccount from "./Components/EditAccount";

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
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/myplants" component={MyPlants} />
            <Route path="/profile" component={Profile} />
            <Route path="/editplant/:plant_id" component={EditPlant} />
            <Route path="/editaccount" component={EditAccount} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
