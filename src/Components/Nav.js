import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Navbar style={{ backgroundColor: "#207561" }} dark>
      <NavbarBrand tag={Link} to="/" className="mr-auto">
        Water My Plants
      </NavbarBrand>

      <Nav className="nav-links">
        <NavItem>
          <NavLink
            tag={Link}
            to="/profile"
            className={location.pathname === "/profile" ? "active" : ""}
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
      </Nav>
    </Navbar>
  );
};

export default Navigation;
