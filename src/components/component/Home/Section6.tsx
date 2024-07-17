import { FC } from "react";
import "./home.css";
import blog from "../../../assets/images/Blog.svg";

const Section6: FC = () => {
  return (
    <div className="container">
      <div className="section6">
        <div className="texttt">
          <h1>
            Discover weekly content about <br /> organic food, & more
          </h1>
          <button>More News</button>
        </div>
        <div className="div">
          <img src={blog} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
