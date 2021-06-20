import React from "react";

interface DotsProps {
  index: number;
  currentIdx: number;
  setCurrentIdx: (value: number | ((prevCurrentIdx: number) => number)) => void;
}

const Dots = ({ index, currentIdx, setCurrentIdx }: DotsProps) => {
  return (
    <span
      className={index === currentIdx ? "dot active" : "dot"}
      onClick={() => setCurrentIdx(index)}
    ></span>
  );
};

export default Dots;
