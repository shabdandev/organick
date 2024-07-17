import { FC } from "react";
import "./home.css";
import section2 from "../../../assets/images/Section.svg";
import section3 from "../../../assets/images/section2.2.svg";

const Section2: FC = () => {
  return (
    <div id="section2">
      <div className="container">
        <div className="section2">
          <div className="section-img">
            <img src={section2} alt="" />
          </div>
          <div className="teext">
            <h1>
              We Believe in Working <br /> Accredited Farmers
            </h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to <br /> been the industry's standard dummy text ever
              since the 1500s, when an unknown <br /> printer took a galley.
            </p>
            <img src={section3} alt="" />
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
