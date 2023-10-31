import React, { useState } from "react";
import vid from "../assets/spiderman.mp4";

const Loader = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className={`loader ${videoEnded ? "loaded" : ""}`}>
      <video
        className="vid"
        width="640"
        height="360"
        onEnded={handleVideoEnd}
        autoPlay
        muted
        playsInline
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="spinning">Welcome</div>
    </div>
  );
};

export default Loader;
