"use client";

// src/components/videoPlayer.tsx
import React, { useRef, useState } from "react";

export default function VideoPlayer({
  video,
}: {
  video: { url: string; title: string };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex justify-center items-center">
      <video
        ref={videoRef}
        src={video.url}
        width="800"
        height="500"
        controls
        autoPlay
        loop
        muted
        className="rounded-lg shadow-lg"
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
}
