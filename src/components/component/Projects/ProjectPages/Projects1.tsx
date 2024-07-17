import { FC } from "react";
import "../project.css";
import end from "../../../../assets/images/end.svg";

const Projects1: FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${end})`,
        height: "60vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="projects">
          <h1>Quality Standard</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects1;
