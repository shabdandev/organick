import { FC } from "react";
import "../basket.css";
import bg from "../../../../assets/images/basket.svg";

const Basket1: FC = () => {
  return (
    <div id="basket">
      <div className="bg">
        <img src={bg} alt="" />
      </div>
      <div className="container">
        <div className="basket"></div>
      </div>
    </div>
  );
};

export default Basket1;
