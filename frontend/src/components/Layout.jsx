import React from "react";
import page from "../assets/page.svg";
import wood from "../assets/woodBackground.jpg";
import abclogo from "../assets/abc-logo.svg";
import onlinereaderlogo from "../assets/online-reader-logo.svg";

function Layout({ children }) {
  return (
    <div
      style={{ backgroundImage: `url(${wood})` }}
      className="h-screen bg-cover bg-center flex flex-row justify-center items-center px-10 pt-3"
    >
      <div
        className="left-logo relative h-full bg-no-repeat flex-1"
        style={{
          backgroundImage: `url(${abclogo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="relative h-full w-full max-w-2xl mx-10 bg-no-repeat"
        style={{
          position: "relative",
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url(${page})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="relative pt-10 md:pt-37 px-10 md:px-20 flex justify-center items-center">
          <div className="w-full h-full overflow-auto">{children}</div>
        </div>
      </div>

      <div
        className="right-logo relative h-full bg-no-repeat flex-1"
        style={{
          backgroundImage: `url(${onlinereaderlogo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Layout;
