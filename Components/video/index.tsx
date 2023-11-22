import { useState, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
  };

  const handleDurationChange = () => {
    const video = videoRef.current;
    setDuration(video.duration);
  };

  const handleSeek = (value) => {
    const video = videoRef.current;
    const newTime = (value / 100) * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div>
      <video
        ref={videoRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
        style={{ width: '100%' }}
      >
        <source src="/anb.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video>

      <div>
        <p>Current Time: {currentTime.toFixed(2)} seconds</p>
        <input
          type="range"
          value={(currentTime / duration) * 100}
          onChange={(e) => handleSeek(e.target.value)}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
