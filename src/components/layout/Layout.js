import React from "react";
import { Fragment } from "react";

import classes from "./Layout.module.css";
import MainHeader from "./MainHeader";


function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>

    </Fragment>
  );
}

export default Layout;
