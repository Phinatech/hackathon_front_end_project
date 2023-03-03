import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../DashBoard/Home/Home";
import Investify from "../DashBoard/Investify/Investify";

const MainDetailDashBoard = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Investify />,
    },
    {
      path:"/home",
      element:<Home/>
    }
  ]);
  return element;
};

export default MainDetailDashBoard;
