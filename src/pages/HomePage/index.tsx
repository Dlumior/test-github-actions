import React from "react";
import { useAuth } from "../../hooks/useAuth";
import MainLayout from "../../layout/MainLayout";

const HomePage = () => {
  const auth = useAuth();

  return (
    <MainLayout>
      <div>
        <h1>HomePage</h1>
        <button
          type="button"
          onClick={() => auth?.signin("test@test.com", "123")}
        >
          Login
        </button>
      </div>
    </MainLayout>
  );
};

export default HomePage;
