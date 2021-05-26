import React from "react";
import { Jumbotron, Button } from "reactstrap";
// import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.getItem("token")
      ? history.push("/items")
      : history.push("/login");
  };
  return (
    <div className="homepage">
      <Jumbotron>
        <div className="homePage">
          <div className="content">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              WaterMyPlants will remind users when it's time to feed that
              foliage and quench your plants' thirst.
            </p>
            <hr className="my-2" />
            <p>
              Ensuring that all your plants are consistently watered is actually
              pretty difficult. Water My Plants is an app that helps to solve
              those problems.
            </p>
            <p className="lead">
              <Button onClick={handleClick} color="primary">
                Learn More!
              </Button>
            </p>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default HomePage;
