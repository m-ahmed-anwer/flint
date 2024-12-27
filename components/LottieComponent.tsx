"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieComponent = ({
  url,
  width = 100,
  height = 100,
}: {
  url: string;
  width?: number;
  height?: number;
}) => {
  const handleError = () => {
    throw new Error("Lottie file not found");
  };

  return (
    <DotLottieReact
      src={url}
      loop
      autoplay
      style={{ width: `${width}px`, height: `${height}px` }}
      onError={handleError}
    />
  );
};

export default LottieComponent;
