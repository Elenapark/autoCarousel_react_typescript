import React, { useEffect, useState } from "react";
import "./CarouselSlider.scss";
import { ImageData } from "./ImageData";

const CarouselSlider = () => {
  // 가장 최초에 보여지는 사진의 idx로 state 초기화
  const [currentIdx, setCurrentIdx] = useState(0);
  const length = ImageData.length;

  const prevSlide = () => {
    setCurrentIdx(currentIdx === 0 ? length - 1 : currentIdx - 1);
  };

  const nextSlide = () => {
    setCurrentIdx(currentIdx === length - 1 ? 0 : currentIdx + 1);
  };

  const dotClickHandler = (e: any, idx: any) => {
    e.target.value = idx;
    setCurrentIdx(idx);
  };

  // autoslide 기능
  // useEffect(() => {
  //   const timeInterval = setInterval(() => {
  //     setCurrentIdx(currentIdx === length - 1 ? 0 : currentIdx + 1);
  //   }, 3000);
  //   return () => clearInterval(timeInterval);
  // }, [currentIdx]);

  return (
    <>
      {ImageData.map((img, idx) => {
        return (
          <div className="slideImg" key={idx}>
            {/* currentIdx가 사진의 idx와 맞을때만 해당 사진을 보여줌 */}
            {idx === currentIdx && (
              <>
                <img src={img.image} alt="running img" />
                <h3>{img.title}</h3>
              </>
            )}
          </div>
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
              onClick={(e) => dotClickHandler(e, idx)}
            ></span>
          );
        })}
      </div>
    </>
  );
};

export default CarouselSlider;
