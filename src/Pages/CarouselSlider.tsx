import React, { useEffect, useState } from "react";
import { ImageData } from "./ImageData";
import "./CarouselSlider.scss";

const CarouselSlider = (): JSX.Element => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isMouseHovering, setIsMouseHovering] = useState<boolean>(false);
  const length = ImageData.length;

  // slide 이동
  const goToPrevSlide = () => {
    setCurrentIdx(currentIdx === 0 ? length - 1 : currentIdx - 1);
  };

  const goToNextSlide = () => {
    setCurrentIdx(currentIdx === length - 1 ? 0 : currentIdx + 1);
  };

  // autoslide 기능
  useEffect(() => {
    if (isMouseHovering) {
      return;
    }
    const timeInterval = setInterval(() => {
      setCurrentIdx(currentIdx === length - 1 ? 0 : currentIdx + 1);
    }, 3000);
    return () => clearInterval(timeInterval);
  }, [currentIdx, isMouseHovering]);

  return (
    <section className="slideContents">
      {ImageData.map((img, idx) => {
        return (
          <>
            {idx === currentIdx && (
              <div
                className="slideImg"
                key={idx}
                onMouseEnter={() => setIsMouseHovering(true)}
                onMouseLeave={() => setIsMouseHovering(false)}
              >
                <img src={img.image} alt="running img" />
                <h3 className="imgTitle">{img.title}</h3>
              </div>
            )}
          </>
        );
      })}

      <div className="arrows">
        <span className="prev" onClick={goToPrevSlide}>
          &#10094;
        </span>
        <span className="next" onClick={goToNextSlide}>
          &#10095;
        </span>
      </div>
      <div className="dots">
        {ImageData.map((img, idx) => {
          return (
            <span
              key={idx}
              className={idx === currentIdx ? "dot active" : "dot"}
              onClick={() => setCurrentIdx(idx)}
            ></span>
          );
        })}
      </div>
    </section>
  );
};

export default CarouselSlider;
