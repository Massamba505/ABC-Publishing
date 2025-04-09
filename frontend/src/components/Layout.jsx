import React from "react";
import page from "../assets/page.svg";
import wood from "../assets/woodBackground.jpg";

function Layout({ children }) {
  return (
    <div
      style={{ backgroundImage: `url(${wood})` }}
      className="h-screen bg-cover bg-center flex justify-center items-center pt-5"
    >
      <div
        className="pt-28 px-29 relative h-full w-full max-w-3xl bg-no-repeat"
        style={{
          backgroundImage: `url(${page})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative inset-0 p-5 flex justify-center items-center">
          <div className="w-full h-full overflow-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
