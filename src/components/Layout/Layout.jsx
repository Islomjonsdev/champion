import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import PageHeader from "./PageHeader/PageHeader";
import style from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.layout}>
        <Header />
        <div className={style.sasa}>
          <PageHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
