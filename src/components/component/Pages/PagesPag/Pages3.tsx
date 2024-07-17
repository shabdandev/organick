import { FC } from "react";
import "../pages.css";
import bg from "../../../../assets/images/bg.svg";
import icon from "../../../../assets/images/Video Icon.svg";

const Pages3: FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: "120vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="pages3">
          <h1>Everyday Fresh & Clean</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased <br /> to been the industry's standard dummy text ever
            since the
          </p>
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pages3;
