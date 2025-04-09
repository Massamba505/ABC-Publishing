import React from "react";

function Content({ contents }) {
  return (
    <div className="text-base/relaxed text-justify">
      {contents?.length > 0 &&
        contents.map((content, index) => <p key={index}>{content}</p>)}
    </div>
  );
}

export default Content;
