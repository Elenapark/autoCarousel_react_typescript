import React, { useEffect, useState } from "react";
import { ImageData } from "../ImageData";
import SlideContents from "../../Components/SlideContents/SlideContents";
import Arrows from "../../Components/Arrows/Arrows";
import Dots from "../../Components/Dots/Dots";
import "./CarouselSlider.scss";

const CarouselSlider: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isMouseHovering, setIsMouseHovering] = useState<boolean>(false);
  const length: number = ImageData.length;

  // slide 이동
  const goToPrevSlide = (): void => {
    setCurrentIdx(currentIdx === 0 ? length - 1 : currentIdx - 1);
  };

  const goToNextSlide = (): void => {
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
          <SlideContents
            key={idx}
            index={idx}
            title={img.title}
            image={img.image}
            currentIdx={currentIdx}
            setIsMouseHovering={setIsMouseHovering}
          />
        );
      })}
      <Arrows goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} />
      <div className="dots">
        {ImageData.map((_, idx) => {
          return (
            <Dots
              key={idx}
              index={idx}
              currentIdx={currentIdx}
              setCurrentIdx={setCurrentIdx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CarouselSlider;
