import { FC } from "react";
import "../pages.css";
import img1 from "../../../../assets/images/1.svg";
import img2 from "../../../../assets/images/2.svg";
import img3 from "../../../../assets/images/3.svg";

const Pages2: FC = () => {
  return (
    <div>
      <div className="container">
        <div className="pages2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="btn">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default Pages2;
