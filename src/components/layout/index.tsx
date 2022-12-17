import React, { Fragment } from "react";
import { ILayout } from "../../interfaces/InterfacesLayout";
import { NavBar } from "./NavBar";

export const Layout = ({ children }: ILayout) => {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
    </Fragment>
  );
};
