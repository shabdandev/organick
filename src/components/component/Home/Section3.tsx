import { FC } from "react";
import "./home.css";
import section3 from "../../../assets/images/section3.svg";
import section4 from "../../../assets/images/section3.3.svg";

const Section3: FC = () => {
  return (
    <div
      className="section3"
      style={{
        backgroundImage: `url(${section3})`,
        height: "80vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="section3">
          <div className="text3">
            <h1>What Our Customer Saying?</h1>
            <img src={section4} alt="" />
          </div>
          <div className="radius">
            <div className="radi">
              <h1>100%</h1>
              <h5>Organic</h5>
            </div>
            <div className="radi">
              <h1>285</h1>
              <h5>Active Produc</h5>
            </div>
            <div className="radi">
              <h1>350+</h1>
              <h5>Organic Orchads</h5>
            </div>
            <div className="radi">
              <h1>25+</h1>
              <h5>Years of Farming</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
