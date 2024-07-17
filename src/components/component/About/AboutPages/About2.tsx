import { FC } from "react";
import "../about.css";
import about3 from "../../../../assets/images/about3.svg";
import about4 from "../../../../assets/images/about4.svg";
import about5 from "../../../../assets/images/about5.svg";

const About2: FC = () => {
  return (
    <div id="about2">
      <div className="container">
        <div className="about2">
          <div className="about2-1">
            <h1>
              We do not buy from the <br />
              open market & traders.
            </h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased <br /> to been the industry's standard the 1500s, when
              an unknown
            </p>
            <img src={about3} alt="" />
          </div>
          <div className="about2-2">
            <img src={about4} alt="" />
          </div>
        </div>
        <div className="img5">
          <img src={about5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About2;
