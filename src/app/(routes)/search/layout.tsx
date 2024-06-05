import Sidebar from "@/components/common/Sidebar";
import React from "react";

const SearchRootLayout = ({ children }: any) => {
  return (
    <div>
      <div
        className="grid grid-cols-4
      gap-6 my-12"
      >
        <div className="md:grid-cols-3  ">
          <Sidebar />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default SearchRootLayout;
