import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { HOME } from "../routers/routes";
import routeList from "./routeList";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const auth = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to={HOME}>
              💾
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routeList.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link className="nav-link active" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex">
              {auth?.user?.isAuthenticated ? (
                <div>
                  <span className="me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width="1.3rem"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#000000"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    {auth.user.email}
                  </span>
                  <button
                    className="btn btn-success me-2"
                    type="button"
                    onClick={() => auth?.signout()}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="btn btn-success me-2"
                    type="button"
                    onClick={() => auth?.signin("test@test.com", "123")}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                  >
                    Signin
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
