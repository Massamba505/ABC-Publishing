import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Navigation({ navigations, where }) {
  const getLinkPath = (section) => {
    const specialRoutes = ["preface", "table-of-contents"];
    if (specialRoutes.includes(section.toLowerCase())) {
      return `/${section.toLowerCase()}`;
    }

    return `/${where ? `${where}/` : ""}${section}`;
  };

  return (
    <div className="navigation mt-10 flex flex-col gap-0.5">
      {navigations.map((navigation) => {
        const path = getLinkPath(navigation.section);
        const isReturn = navigation.text.toLowerCase().includes("return");

        return (
          <NavLink
            key={navigation.text}
            to={path}
            className={`relative flex items-center py-1 text-[#7D0A0A] hover:text-[#BF3131] group ${
              isReturn ? "justify-end" : "justify-start"
            }`}
          >
            <ChevronRight
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              stroke="currentColor"
              strokeWidth={2.5}
            />
            <span>{navigation.text}</span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navigation;
