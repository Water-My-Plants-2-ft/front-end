import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-title" to="/">
        <h2>Water My Plants</h2>
      </Link>
      <ul className="nav-links">
        <Link to="/login">
          <h3>Login</h3>
        </Link>
        <Link to="/addplants">
          <h3>Add-Plants</h3>
        </Link>
        <Link to="/signup">
          <h3>Signup</h3>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
