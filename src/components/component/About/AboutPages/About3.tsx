import { FC } from "react";
import "../about.css";
import about6 from "../../../../assets/images/about6.svg";

const About3: FC = () => {
  return (
    <div>
      <div className="container">
        <div className="about3">
          <h1>Our Organic Experts</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's <br /> standard dummy text ever
            since the 1500s, when an unknown printer took a galley.
          </p>
          <img src={about6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About3;
