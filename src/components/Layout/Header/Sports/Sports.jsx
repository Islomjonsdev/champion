import React, { useState } from "react";
import style from "./Sports.module.scss";
import basketballBoll from "../../../../assets/svg/1.svg";
import tennisBoll from "../../../../assets/svg/2.svg";
import csgIcon from "../../../../assets/svg/3.svg";
import Modal from "../../../Modal/Modal";

const Sports = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const sports = [
    {
      sportsImg: basketballBoll,
      nameOfSport: "баскетболл",
      text: "Q 267",
    },
    {
      sportsImg: tennisBoll,
      nameOfSport: "стол теннис",
      text: "Q 129",
    },
    {
      sportsImg: csgIcon,
      nameOfSport: "cs2",
      text: "Q 644",
    },
  ];

  return (
    <>
      <div className={style.sports}>
        <div className={style.sports__wrapper}>
          <div className={style.sports__left}>
            {sports.map((item) => (
              <div className={style.left__wrapper}>
                <img src={item.sportsImg} alt="" />

                <div>
                  <h4>{item.nameOfSport}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={style.right__wrapper}>
            <button onClick={() => setOpenPopup(true)}>создать встречу</button>
          </div>
        </div>
      </div>
      {openPopup && (
        <Modal close={setOpenPopup}>
          <div className={style.popup}>Open Popup</div>
        </Modal>
      )}
    </>
  );
};

export default Sports;
