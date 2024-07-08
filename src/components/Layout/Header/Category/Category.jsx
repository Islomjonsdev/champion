import React from "react";
import { useState } from "react";
import Modal from "../../../Modal/Modal";
import Sports from "../Sports/Sports";
import style from "./Category.module.scss";

const Category = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <div className={style.category}>
          <p>Категории спорта</p>
          <button onClick={() => setOpenModal(true)}>добавить</button>
        </div>
      </div>
      <Sports />
      {openModal && (
        <Modal close={setOpenModal}>
          <div className={style.modal}>Modal</div>
        </Modal>
      )}
    </>
  );
};

export default Category;
