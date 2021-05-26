import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const Navigation = () => {
  const { user_id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [formValues, setFormValues] = useState("");

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };

  useEffect(() => {
    axios
      .get(`/users/${user_id}`)
      .then((res) => {
        console.log(res);

        setFormValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Navbar style={{ backgroundColor: "#207561" }} dark>
      <NavbarBrand tag={Link} to="/" className="mr-auto">
        Water My Plants
      </NavbarBrand>

      {/* <Nav className="nav-links">
        <NavItem>
          <NavLink
            tag={Link}
            to="/myaccount"

            // className={
            //   location.pathname === "/myaccount/:user_id" ? "active" : ""
            // }
          >
            My Account
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={Link}
            to="/myplants"
            className={location.pathname === "/myplants" ? "active" : ""}
          >
            My Plants
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            tag={Link}
            to="/addplants"
            className={location.pathname === "/addplants" ? "active" : ""}
          >
            Add Plant
          </NavLink>
        </NavItem>

        <NavItem onClick={logout}>
          <NavLink tag={Link} to="#">
            Log Out
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            tag={Link}
            to="/login"
            className={location.pathname === "/login" ? "active" : ""}
          >
            Log In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={Link}
            to="/signup"
            className={location.pathname === "/signup" ? "active" : ""}
          >
            Sign Up
          </NavLink>
        </NavItem>
      </Nav> */}

      {localStorage.getItem("token") ? (
        <Nav className="nav-links">
          <NavItem>
            <NavLink
              tag={Link}
              to="/myaccount"
              className={location.pathname === "/recipes" ? "active" : ""}
            >
              My Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/editaccount"
              className={location.pathname === "/recipes" ? "active" : ""}
            >
              Edit Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/myplants"
              className={location.pathname === "/addrecipe" ? "active" : ""}
            >
              My Plants
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/addplants"
              className={location.pathname === "/addrecipe" ? "active" : ""}
            >
              Add Plants
            </NavLink>
          </NavItem>
          <NavItem onClick={logout}>
            <NavLink tag={Link} to="#">
              Log Out
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav className="nav-links">
          <NavItem>
            <NavLink
              tag={Link}
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/signup"
              className={location.pathname === "/registration" ? "active" : ""}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
};

export default Navigation;
