import React from "react";
import { Link } from "react-router-dom";
import routeList from "./routeList";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <div>
    <ul>
      {routeList.map((item) => (
        <li key={item.id}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
    {children}
  </div>
);

export default MainLayout;
