import React from "react";
import profileLogo from "../../../assets/images/profile.png";
import smsIcon from "../../../assets/icon/sms.svg";
import energyIcon from "../../../assets/icon/energy.svg"
import ratingIcon from "../../../assets/icon/rating.svg"
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import Category from "./Category/Category";

const Header = () => {
  return (
    <div>
      <div className={style.header}>
        <Link className={style.header__profile}>
          <img src={profileLogo} alt="" />
          <div>
            <p className={style.header__profile__nickname}>@nickname</p>
            <p className={style.header__profile__name}>Abbos Janizakov</p>
          </div>
        </Link>

        <ul className={style.header__blog}>
          <li>
            <Link>
              <img src={smsIcon} alt="" />
              <p>3</p>
            </Link>
          </li>
          <li>
            <Link>
              <img src={energyIcon} alt="" />
              <p>54</p>
            </Link>
          </li>
          <li>
            <Link>
              <img src={ratingIcon} alt="" />
              <p>32%</p>
            </Link>
          </li>
        </ul>
      </div>
      <Category />
    </div>
  );
};

export default Header;
