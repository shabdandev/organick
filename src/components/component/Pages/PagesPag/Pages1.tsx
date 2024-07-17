import { FC } from "react";
import "../pages.css";
import pages from "../../../../assets/images/pages.svg";

const Pages1: FC = () => {
  return (
    <>
      <div className="pages">
        <img width={1905} src={pages} alt="" />
      </div>
      <div className="container">
        <div className="pages1">
          <h1>
            Better Agriculture for <br />
            Better Future
          </h1>
        </div>
      </div>
    </>
  );
};

export default Pages1;
