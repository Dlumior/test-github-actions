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
        <Link key={item.title} to={item.path}>
          {item.title}
        </Link>
      ))}
    </ul>
    {children}
  </div>
);

export default MainLayout;
