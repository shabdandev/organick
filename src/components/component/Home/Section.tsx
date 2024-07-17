import { FC } from "react";
import "./home.css";
import homeStart from "../../../assets/images/Banner.svg";

const Section: FC = () => {
  return (
    <div
      className="home-page"
      style={{
        backgroundImage: `url(${homeStart})`,
        height: "80vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="home">
          <h1>Choose the best healthier way of life</h1>
          <button>Explore Now </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
