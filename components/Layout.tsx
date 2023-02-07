import React from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Meta />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
