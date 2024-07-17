import { FC } from "react";
import "./about.css";
import About1 from "./AboutPages/About1";
import About2 from "./AboutPages/About2";
import About3 from "./AboutPages/About3";
import About4 from "./AboutPages/About4";
import Footer from "../../pages/Footer/Footer";

const About: FC = () => {
  return (
    <>
      <About1 />
      <About2 />
      <About3 />
      <About4 />
      <Footer />
    </>
  );
};

export default About;
