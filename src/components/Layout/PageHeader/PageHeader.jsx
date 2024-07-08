import React from "react";
import { NavLink } from "react-router-dom";
import searchIcon from "../../../assets/icon/search.svg";
import style from "./PageHeader.module.scss";

const PageHeader = () => {
  return (
    <div className={style.page__header}>
      <button>
        <img src={searchIcon} alt="" />
      </button>
      <ul>
        <li>
          <NavLink to={"/players"}>Игроки</NavLink>
        </li>
        <li>
          <NavLink to={"/teams"}>Команда</NavLink>
        </li>
        <li>
          <NavLink to={"/games"}>Мач</NavLink>
        </li>
        <li>
          <NavLink to={"/competation"}>Турнир</NavLink>
        </li>
        <li>
          <NavLink to={"/stadiums"}>Площадки</NavLink>
        </li>
        <li>
          <NavLink to={"/posts"}>Лента</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PageHeader;
