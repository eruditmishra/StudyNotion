import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../Components/Core/HomePage/HighlightText";
import CTAButton from "../Components/Core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/Core/HomePage/CodeBlocks";

const Home = () => {
  return (
    <>
      {/* Section 1 */}
      <section
        className={`relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between`}
      >
        <Link to={"/signup"}>
          <div className="group mt-16 px-1 mx-auto rounded-full gap-[0.3125rem] bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit shadow-buttonShadow capitalize p-1">
            <div className="flex items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900 ">
              <p>become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <h1 className="text-center text-4xl font-semibold mt-8 capitalize ">
          Empower your future with
          <HighlightText text={"Coding Skills"} />
        </h1>

        <p className=" font-bold font-inter text-[1rem] leading-6 text-center text-richblack-300 max-w-[57rem] h-[3rem] mt-4">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.{" "}
        </p>

        <div className="flex gap-7 mt-8">
          <CTAButton children="Learn More" active={true} linkto={"/signup"} />
          <CTAButton children="Book a Demo" active={false} linkto={"/signup"} />
        </div>

        <div className=" shadow-blue-200 mx-3 my-12 ">
          <video src={Banner} muted loop autoPlay></video>
        </div>

        {/* Code Section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={`coding potential`} /> with our
                online courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: "true",
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: "false",
            }}
            codeBlock={`<!DOCTYPE html>
            <html>   
            <head><title>Example</title><linkrel="stylesheet"href="styles.css">
            </head>
            <body>
            <h1><ahref="/">Header</a></h1>
            <nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>
            /nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={`coding potential`} /> with our
                online courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: "true",
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: "false",
            }}
            codeBlock={`<!DOCTYPE html>
            <html>   
            <head><title>Example</title><linkrel="stylesheet"href="styles.css">
            </head>
            <body>
            <h1><ahref="/">Header</a></h1>
            <nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>
            /nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
      </section>

      {/* Section 2 */}
      {/* Section 3 */}
      {/* Footer */}
    </>
  );
};

export default Home;
