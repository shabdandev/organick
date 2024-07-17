import { FC } from "react";
import "../project.css";
import end from "../../../../assets/images/end1.svg";
import end2 from "../../../../assets/images/end2.svg";
import end3 from "../../../../assets/images/end3.svg";

const Projects2: FC = () => {
  return (
    <div className="container">
      <div className="project2">
        <img src={end} alt="" />
        <div className="pro">
          <div className="prt">
            <h1>Organic Store Services</h1>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a <br /> layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to <br /> using 'Content here,
              content here', making it look like readable English.
            </p>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, <br /> and auncover many
              web sites still in their infancy. Various versions have evolved
              over the years
            </p>
          </div>
          <img src={end2} alt="" />
          <div className="prr">
            <h4>We farm your land</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a <br /> layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to <br /> using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <img src={end3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects2;
