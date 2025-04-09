import React from "react";
import { Link } from "react-router-dom";

function Navigation({ navigations, where }) {
  function getLinkPath(text, section) {
    if (
      section.toLowerCase() === "preface" ||
      section.toLowerCase() === "table-of-contents"
    ) {
      return `/${section.toLowerCase()}`;
    }

    return `/${where != null ? where + "/" : ""}${section}`;
  }

  return (
    <div className="">
      <h2 className="text-[#7D0A0A] text-3xl mt-1 mb-3 text-center font-bold">
        Navigation
      </h2>
      <div className="flex flex-col">
        {navigations.map((navigation) => {
          const path = getLinkPath(navigation["text"], navigation["section"]);
          return (
            <Link
              className={`${navigation["text"]}`}
              key={navigation["text"]}
              to={path}
            >
              {`${navigation["text"]}`}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
