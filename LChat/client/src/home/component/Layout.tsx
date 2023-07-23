import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface ILayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: ILayoutProps): React.ReactElement {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        margin: "0 auto",
        width: "360px",
        background: "#fff",
        height: "100vh",
      }}
    >
      <div
        onClick={onClick}
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Go to main Page
      </div>
      {children || <Outlet />}
    </div>
  );
}

export default Layout;
