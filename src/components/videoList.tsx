"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import overlayAnimation from "../../public/animations/Animation.json";

export default function VideoList() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState<{ [key: string]: number }>({});
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/videos");
        const data = await res.json();

        if (data && Array.isArray(data)) {
          setVideos(data);
          const initialLikes: { [key: string]: number } = {};
          data.forEach((video: any) => {
            initialLikes[video.id] = 0;
          });
          setLikes(initialLikes);
        } else {
          console.error("Expected an array but received:", data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, []);

  const handleLike = (videoId: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [videoId]: (prevLikes[videoId] || 0) + 1,
    }));
  };

  const handleVideoClick = (videoId: string) => {
    setLoading(true);
    setCurrentVideoId(videoId);

    setTimeout(() => {
      router.push(`/videos/${videoId}`);
    }, 2000);
  };

  if (videos.length === 0) {
    return <div>No videos available</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {videos.map((video: any) => (
          <div
            key={video.id}
            className="cursor-pointer"
            onClick={() => handleVideoClick(video.id)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-md shadow-md"
            />
            <h3 className="text-center mt-2 font-medium">{video.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(video.id);
                }}
                className="px-4 py-2 bg-pink-500 text-white rounded-md"
              >
                Like 💖
              </button>
              <span>{likes[video.id]} Likes</span>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Lottie
            animationData={overlayAnimation}
            loop={true}
            style={{ height: 300, width: 300 }}
          />
        </div>
      )}
    </div>
  );
}
