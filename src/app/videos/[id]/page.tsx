// Example for the correct usage in Next.js dynamic routing

import { notFound } from "next/navigation";
import VideoPlayer from "../../../components/videoPlayer";

// Mock video data (this should ideally come from your database or API)
const videos = [
  {
    id: "1",
    title: "Video 1",
    url: "https://d39dwc9mjexlur.cloudfront.net/cute.mp4",
    thumbnail: "/images/thumbnail1.jpeg",
  },
  {
    id: "2",
    title: "Video 2",
    url: "https://d39dwc9mjexlur.cloudfront.net/cute.mp4",
    thumbnail: "/images/thumbnail2.jpeg",
  },
  {
    id: "3",
    title: "Video 3",
    url: "https://d39dwc9mjexlur.cloudfront.net/cute.mp4",
    thumbnail: "/images/thumbnail3.jpeg",
  },
];

// VideoPage component
export default function VideoPage({
  params,
}: {
  params: { id: string }; // Directly expecting `id` from params, no Promise wrapping
}) {
  const { id } = params;

  // Find the video by id
  const video = videos.find((video) => video.id === id);

  if (!video) {
    notFound(); // Trigger 404 if video not found
  }

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">{video.title}</h1>
      <VideoPlayer video={video} /> {/* Pass the entire video object here */}
    </div>
  );
}
