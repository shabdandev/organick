import { FC } from "react";
import "./home.css";
import section5 from "../../../assets/images/Section5.svg";
import section6 from "../../../assets/images/Section5.5.svg";
import section7 from "../../../assets/images/Section5.6.svg";

const Section5: FC = () => {
  return (
    <div id="section5">
      <div className="container">
        <div className="section5">
          <div className="immg">
            <img width={550} src={section5} alt="" />
            <div className="tx">
              <h4>Organic Juice</h4>
            </div>
          </div>
          <div className="immg">
            <img width={550} src={section6} alt="" />
            <div className="tx">
              <h4>Organic Food</h4>
            </div>
          </div>
          <div className="immg">
            <img width={550} src={section7} alt="" />
            <div className="tx">
              <h4>Organic Cookis</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
