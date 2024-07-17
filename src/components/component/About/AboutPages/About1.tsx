import { FC } from "react";
import "../about.css";
import about from "../../../../assets/images/about.svg";
import about1 from "../../../../assets/images/about1.svg";
import about2 from "../../../../assets/images/about2.svg";

const About1: FC = () => {
  return (
    <div>
      <div className="about">
        <img src={about} alt="" />
      </div>
      <div className="container">
        <div className="about1">
          <div className="about-hero">
            <img src={about1} alt="" />
          </div>
          <div className="about-logo">
            <h1>
              We do Creative <br /> Things for Success
            </h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased <br /> to been the industry's standard dummy text ever
              since the 1500s, when an <br /> unknown printer took a galley.
            </p>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased <br /> to been the industry's standard dummy text ever
              since the 1500s, when an <br /> unknown printer took a galley.
            </p>
            <img src={about2} alt="" />
            <button>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
