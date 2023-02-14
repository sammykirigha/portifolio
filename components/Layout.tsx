import React from "react";
import Footer from "./Footer";
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
      <Footer />
    </div>
  );
};

export default Layout;
