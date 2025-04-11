import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="m-8">
      <div>
        <h1 className="h1-bold">DesignChat</h1>
      </div>
      <div className="flex">
        <section className="w-1/2">{children}</section>
        Right Side bar
      </div>
    </main>
  );
};

export default Layout;
