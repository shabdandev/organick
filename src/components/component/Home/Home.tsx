import { FC } from "react";
import "./home.css";
import Section1 from "./Section1";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "../../pages/Footer/Footer";

const Home: FC = () => {
  return (
    <>
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
};

export default Home;
