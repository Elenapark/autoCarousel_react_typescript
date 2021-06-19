import React, { useEffect, useState } from "react";
import "./CarouselSlider.scss";
import { ImageData } from "./ImageData";

const CarouselSlider = () => {
  // 가장 최초에 보여지는 사진의 idx로 state 초기화
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const length = ImageData.length;
  // console.log(isMouseHovering);

  const prevSlide = () => {
    setCurrentIdx(currentIdx === 0 ? length - 1 : currentIdx - 1);
  };

  const nextSlide = () => {
    setCurrentIdx(currentIdx === length - 1 ? 0 : currentIdx + 1);
  };

  // autoslide 기능
  useEffect(() => {
    // mouseover시 autoslide pausing
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
        <span className="prev" onClick={prevSlide}>
          &#10094;
        </span>
        <span className="next" onClick={nextSlide}>
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
