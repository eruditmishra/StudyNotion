import React from "react";

const HighlightText = (props) => {
  return (
    <>
      <span
        className={`font-bold bg-clip-text bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent`}
      >
        {" "}
        {props.text}
      </span>
    </>
  );
};

export default HighlightText;
