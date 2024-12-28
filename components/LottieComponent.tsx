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
    console.log("Error loading Lottie file");
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
