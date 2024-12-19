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
  return (
    <DotLottieReact
      src={url}
      loop
      autoplay
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default LottieComponent;
