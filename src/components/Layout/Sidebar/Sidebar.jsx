import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import style from "./Sidebar.module.scss"

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Link>
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Sidebar;
