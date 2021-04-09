import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";
import homeCheck from "../images/house-check.png";
import createReview from "../images/holding-the-phone.png";
import community from "../images/community.png";
export default function HomeAnimations() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <div className="w-100 flex items-center flex-col justify-center">
      <div
        onMouseEnter={() => setFirst(true)}
        className=" m-4 flex items-center flex-row justify-center"
      >
        <article className=" m-4 w-6/12">
          <h1 className="text-indigo-600 font-extrabold text-7xl">
            True Insights
          </h1>
        </article>
        <Bounce fraction={0.01} delay={0} when={first} left>
          <img className="w-3/12" src={homeCheck}></img>
        </Bounce>
      </div>

      <div
        onMouseEnter={() => setSecond(true)}
        className="static  flex items-center flex-row justify-center"
      >
        <Bounce fraction={0.01} delay={0} when={second} right>
          <img className="w-3/12" src={createReview}></img>
        </Bounce>
        <article className="m-4 w-6/12">
          <h1 className="text-indigo-600 font-extrabold text-7xl">
            Review Your Rental
          </h1>
          {/* <p onMouseEnter={() => setThird(true)}><br></br></p> */}
        </article>
      </div>

      <div
        onMouseEnter={() => setThird(true)}
        className="m-4 flex items-center flex-row justify-center"
      >
        <article className="m-4 w-6/12 ">
          <h1 className="text-indigo-600 font-extrabold text-7xl">
            Better Together
          </h1>
        </article>
        <Bounce fraction={0.01} delay={0} when={third} left>
          <img className="w-3/12" src={community}></img>
        </Bounce>
      </div>
    </div>
  );
}
