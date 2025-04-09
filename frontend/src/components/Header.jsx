import React from "react";

function Header({ title }) {
  return (
    <h1 className="text-[#7D0A0A] text-5xl mb-5 text-center font-bold">
      {title}
    </h1>
  );
}

export default Header;
