import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = (props) => {
  return (
    <>
      <Link to={props.linkto}>
        <button
          className={` text-center  text-[0.8125rem] px-6 py-3 rounded-md font-bold shadow-buttonShadow ${
            props.active ? "bg-yellow-50 text-black" : "bg-richblack-800"
          } hover:scale-95 transition-all duration-200 flex items-center justify-center`}
        >
          <p className=" font-inter font-medium text-[1rem] leading-6 ">
            {props.children}
          </p>
        </button>
      </Link>
    </>
  );
};

export default PrimaryButton;
