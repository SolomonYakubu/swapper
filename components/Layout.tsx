import React, { Component } from "react";

const Layout = ({ children }: any) => {
  return (
    <div className="min-h-[calc(100vh-96px)] h-[calc(100vh-92px)]  p-0 m-0 mt-20">
      {children}
    </div>
  );
};
export default Layout;
