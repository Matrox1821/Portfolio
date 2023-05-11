import React, {Fragment} from "react";
import {NavBar} from "./NavBar";
import {ILayout} from "../../types/Interfaces";
export const Layout = ({children}: ILayout) => {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
    </Fragment>
  );
};
