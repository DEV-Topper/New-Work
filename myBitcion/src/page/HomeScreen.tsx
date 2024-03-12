import About from "./landing/About";
import Benefit from "./landing/Benefit";
import Hero from "./landing/Hero";
import HowItWorks from "./landing/HowItWorks";
import Tokens from "./landing/Tokens";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <About />
      <Benefit />
      <Tokens />
    </div>
  );
};

export default HomeScreen;
