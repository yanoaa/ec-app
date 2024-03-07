import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home } from "./templates";

const Router = () => {
  return (
    <Routes>
      <Route path={"/login"} Component={Login} />
      <Route path={"/"} Component={Home} />
    </Routes>
  );
};

export default Router;
// exactはパスがピッタリ一致していなければいけない
