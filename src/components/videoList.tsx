"use client";

// src/app/videos/page.tsx
import { useEffect, useState } from "react";
import Link from "next/link";

export default function VideoList() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/videos");
        const data = await res.json();

        if (data && Array.isArray(data)) {
          setVideos(data);
        } else {
          console.error("Expected an array but received:", data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }
    fetchVideos();
  }, []);

  if (videos.length === 0) {
    return <div>No videos available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {videos.map((video: any) => (
        <Link href={`/videos/${video.id}`} key={video.id}>
          <div className="cursor-pointer">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-md shadow-md"
            />
            <h3 className="text-center mt-2 font-medium">{video.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
