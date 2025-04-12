import DesignPreview from "@/components/design/DesignPreview";
import DesignProvider from "@/context/DesignProvider";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="m-8">
      <div className="my-4">
        <h1 className="h1-bold">DesignChat</h1>
      </div>
      <div className="flex  gap-4">
        <DesignProvider>
          <section className="w-1/2">{children}</section>
          <DesignPreview />
        </DesignProvider>
      </div>
    </main>
  );
};

export default Layout;
