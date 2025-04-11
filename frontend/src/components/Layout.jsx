import React from "react";
import page from "../assets/page.svg";
import wood from "../assets/woodBackground.jpg";

function Layout({ children }) {
  return (
    <div
      style={{ backgroundImage: `url(${wood})` }}
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center pt-3"
    >
      <div
        className="relative h-full w-full max-w-3xl bg-no-repeat"
        style={{
          backgroundImage: `url(${page})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative pt-30 px-29 flex justify-center items-center">
          <div className="w-full h-full overflow-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
