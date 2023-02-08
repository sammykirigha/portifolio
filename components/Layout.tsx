import React from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="container">
      <Meta />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
