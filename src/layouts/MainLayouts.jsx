import React from "react";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayouts;
