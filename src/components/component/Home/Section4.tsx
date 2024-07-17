import { FC } from "react";
import "./home.css";
import section4 from "../../../assets/images/section4.svg";

const Section4: FC = () => {
  return (
    <div className="section4">
      <div className="imgg">
        <img src={section4} alt="" />
      </div>
      <div className="section4-4">
        <h1>
          Econis is a Friendly <br />
          Organic Store
        </h1>
        <div className="t1">
          <h3>Start with Our Company First</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div className="t1">
          <h3>Learn How to Grow Yourself</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div className="t1">
          <h3>Farming Strategies of Today</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
