import { FC } from "react";
import "../shop.css";
import shop from "../../../../assets/images/shop.svg";

const Shop1: FC = () => {
  return (
    <div>
      <div className="shopimg">
        <img width={1905} src={shop} alt="" />
      </div>
      <div className="container">
        <div className="shop"></div>
      </div>
    </div>
  );
};

export default Shop1;
