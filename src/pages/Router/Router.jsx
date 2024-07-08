import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Competation from "../Competation/Competation";
import Games from "../Games/Games";
import Players from "../Players/Players";
import Posts from "../Posts/Posts";
import Stadiums from "../Stadiums/Stadiums";
import Teams from "../Teams/Teams";
import style from "./Router.module.scss";

const Router = () => {
  return (
    <div className={style.route}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/games" element={<Games />} />
          <Route path="/competation" element={<Competation />} />
          <Route path="/stadiums" element={<Stadiums />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
