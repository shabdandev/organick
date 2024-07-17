import { FC } from "react";
import "../about.css";
import about7 from "../../../../assets/images/about7.svg";

const About4: FC = () => {
  return (
    <div id="about4">
      <div className="container">
        <div className="about4">
          <h1>What We Offer for You</h1>
          <img src={about7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About4;
