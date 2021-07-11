import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

interface IProps {
  children: JSX.Element;
}

const AppRouter = ({ children }: IProps) => {
  return <Router>{children}</Router>;
};

export default AppRouter;
