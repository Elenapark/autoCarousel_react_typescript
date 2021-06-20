import React from "react";
import "./SlideContents.scss";

interface SlideProps {
  index: number;
  title: string;
  image: string;
  currentIdx: number;
  setIsMouseHovering: (
    value: boolean | ((prevIsMouseHovering: boolean) => boolean)
  ) => void;
}

const SlideContents: React.FC<SlideProps> = ({
  index,
  title,
  image,
  currentIdx,
  setIsMouseHovering,
}: SlideProps) => {
  return (
    <>
      {index === currentIdx && (
        <div
          className="slideImg"
          onMouseEnter={() => setIsMouseHovering(true)}
          onMouseLeave={() => setIsMouseHovering(false)}
        >
          <img src={image} alt="running img" />
          <h3 className="imgTitle">{title}</h3>
        </div>
      )}
    </>
  );
};

export default SlideContents;
