import { FC } from "react";
import "./home.css";
import section from "../../../assets/images/homeSection2.svg";
import section1 from "../../../assets/images/home3.svg";

const Section1: FC = () => {
  return (
    <div className="img">
      <div
        className="section1"
        style={{
          width: "680px",
          height: "360px",
          backgroundImage: `url(${section1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "30px",
        }}
      >
        <h1>Get Garden Fresh Fruits</h1>
      </div>
      <div
        className="section2"
        style={{
          width: "680px",
          height: "360px",
          backgroundImage: `url(${section})`,
          // height: "80vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "30px",
        }}
      >
        <h1>Get 10% off on Vegetables</h1>
      </div>
    </div>
  );
};

export default Section1;
