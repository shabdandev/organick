import { FC } from "react";
import "../Header/header.css";
import logo from "../../../assets/images/Header-Logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

const Header: FC = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <div className="text">
            <div className="add">
              <button onClick={() => nav("/admin")}>
                <IoMdAdd />
              </button>
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/pages">Pages</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/news">News</NavLink>
          </div>
          <div className="in">
            <input type="text" />
            <div className="bt">
              <IoSearch />
            </div>
            <button onClick={() => nav("/bas")}>
              <BsBasket />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
