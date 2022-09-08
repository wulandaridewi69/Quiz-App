import React from "react";
import * as animationData from '../assets/98288-loading.json'
import Lottie from "lottie-react";

const Loading = () => {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Lottie 
	      options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        height={400}
        width={400}
      />
    </div>
  )
}

export default Loading;

