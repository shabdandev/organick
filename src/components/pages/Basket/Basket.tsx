import { FC } from "react";
import Basket1 from "./BasketPages/Basket1";
import Basket3 from "./BasketPages/Basket3";
import Footer from "../Footer/Footer";

const Basket: FC = () => {
  return (
    <>
      <Basket1 />
      <Basket3 />
      <Footer />
    </>
  );
};

export default Basket;
