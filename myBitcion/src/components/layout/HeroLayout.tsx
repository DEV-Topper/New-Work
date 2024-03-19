import { Outlet, useLocation } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import { useEffect } from "react";

const HeroLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HeroLayout;
