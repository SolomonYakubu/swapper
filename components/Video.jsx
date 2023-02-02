import React from "react";

const AutomaticPlayer = function () {
  return (
    <video
      autoPlay
      loop
      muted
      
      playsInline
      src="videos/about.mp4"
      width="100%"
      height="100%"
      className=" md:h-[80vh]"
    />
  );
};
export default AutomaticPlayer;