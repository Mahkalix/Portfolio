import React, { useState, useRef, useEffect } from "react";
import vid from "../assets/spiderman.mp4";

const Loader = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const updateVideoProgress = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const progress = (video.currentTime / video.duration) * 100;
      setVideoProgress(progress);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current; // Copy the value to a variable
      videoElement.addEventListener("ended", handleVideoEnd);
      videoElement.addEventListener("timeupdate", updateVideoProgress);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
        videoElement.removeEventListener("timeupdate", updateVideoProgress);
      };
    }
  }, []);

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
        ref={videoRef}
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="progress-container">
        <div className="progress"></div>
        <span className="progress-text">{Math.round(videoProgress)}%</span>
      </div>
    </div>
  );
};

export default Loader;
