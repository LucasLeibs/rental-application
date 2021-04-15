import React, { useState } from "react";
import homeCheck from "../images/house-check.png";
import createReview from "../images/holding-the-phone.png";
import community from "../images/community.png";
const images = [homeCheck, createReview, community];
export default function Slideshow() {
  const [currentImage, changeImage] = useState(0);

  const next = () => {
    if (currentImage === images.length - 1) {
      changeImage(currentImage + 0);
    } else {
      changeImage(currentImage + 1);
    }
  };
  const back = () => {
    if (currentImage === 0) {
      changeImage(currentImage - 0);
    } else {
      changeImage(currentImage - 1);
    }
  };
  return (
    <div className="mt-20 relative w-100 flex items-center flex-col justify-center">
      <div className="w-100 flex items-center flex-col justify-center">
        <img className="w-3/12" src={images[currentImage]}></img>
        <button className="bg-indigo-600 p-2 m-1 rounded-md text-white" onClick={() => next()}>Next</button>
        <button className="bg-indigo-600 p-2 m-1 rounded-md text-white" onClick={() => back()}>Back</button>
        <p>{currentImage + 1} / {images.length}</p>
      </div>
    </div>
  );
}
