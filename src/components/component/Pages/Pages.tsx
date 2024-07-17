import { FC } from "react";
import Pages1 from "./PagesPag/Pages1";
import Pages2 from "./PagesPag/Pages2";
import Pages3 from "./PagesPag/Pages3";
import PagesEnd from "./PagesPag/PagesEnd";

const Pages: FC = () => {
  return (
    <>
      <Pages1 />
      <Pages2 />
      <Pages3 />
      <PagesEnd />
    </>
  );
};

export default Pages;
