import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <div className={classes.navbar}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active}  to="/quotes">All Quotes</NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/new-quote">New Quote</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainHeader;
