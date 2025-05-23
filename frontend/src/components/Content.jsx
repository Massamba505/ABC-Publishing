import React from "react";

function Content({ contents }) {
  return (
    <div className="content text-base/relaxed text-justify px-0">
      {contents?.length > 0 &&
        contents.map((content, index) => <p key={index}>{content}</p>)}
    </div>
  );
}

export default Content;
