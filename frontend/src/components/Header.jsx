import React from "react";

function Header({ title }) {
  return (
    <h2 className="header text-[#7D0A0A] text-5xl mb-5 text-center font-bold">
      {title}
    </h2>
  );
}

export default Header;
