import { FC } from "react";
import "./footer.css";
import footer from "../../../assets/images/Footer.svg";
import footer5 from "../../../assets/images/Footer (1).svg";

const Footer: FC = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="image">
            <img src={footer} alt="" />
            <div className="ttt">
              <h1>
                Subscribe to <br />
                our Newsletter
              </h1>
            </div>
            <div className="input">
              <input type="text" placeholder="Email Adres" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <img width={1800} src={footer5} alt="" />
      </div>
    </>
  );
};

export default Footer;
