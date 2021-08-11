import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import routeList from "./routeList";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const auth = useAuth();
  return (
    <div>
      <ul>
        {routeList.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => auth?.signin("test@test.com", "123")}
      >
        Log in
      </button>
      <button type="button" onClick={() => auth?.signout()}>
        Log out
      </button>
      <p>Logged: {auth?.user?.isAuthenticated ? "Yes" : "No"}</p>
      <p>User : {auth?.user?.email}</p>
      {children}
    </div>
  );
};

export default MainLayout;
