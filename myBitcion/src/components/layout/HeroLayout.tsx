import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";

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
