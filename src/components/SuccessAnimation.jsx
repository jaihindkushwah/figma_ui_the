import Lottie from "lottie-react";
import React from "react";
import successAnimation from "../animations/success.json";

function SuccessAnimation({ loop = false, width = "180px", height = "180px" }) {
  return (
    <Lottie
      animationData={successAnimation}
      loop={loop}
      style={{ width, height }}
    />
  );
}

export default SuccessAnimation;
