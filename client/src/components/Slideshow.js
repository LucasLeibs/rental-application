import React, { useState } from "react";
import homeCheck from "../images/house-check.png";
import createReview from "../images/holding-the-phone.png";
import community from "../images/community.png";
const images = ['https://images.adsttc.com/media/images/5014/01bd/28ba/0d3b/4500/0b8c/large_jpg/stringio.jpg?1414576505', 'https://s3-prod.chicagobusiness.com/%231_57.jpg', 'https://miro.medium.com/max/619/0*rB62Gty4XcUO1DUt.jpg'];
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
    <div className="mt-10 relative w-6/12 flex items-center flex-col justify-center">
      <div className="w-100 flex items-center flex-col justify-center">
        <img className="w-100" src={images[currentImage]}></img>
      </div>
      <div className="flex items-center flex-col justify-center">
          <span>
      <button className="bg-indigo-600 p-2 m-1 rounded-md text-white" onClick={() => back()}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg></button>
        <button className="bg-indigo-600 p-2 m-1 rounded-md text-white" onClick={() => next()}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg></button>
</span>
        <p>{currentImage + 1} / {images.length}</p>
      </div>
    </div>
  );
}
