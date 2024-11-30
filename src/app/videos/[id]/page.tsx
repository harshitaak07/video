import { notFound } from "next/navigation";
import VideoPlayer from "../../../components/videoPlayer";

const videos = [
  {
    id: "1", // id is a string in the data
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
export default async function VideoPage(props: {
  params: Promise<{ id: string }>; // Directly expecting `id` from params, no Promise wrapping
}) {
  const params = await props.params;
  const { id } = params;

  // Find the video based on the 'id' from the route
  const video = videos.find((video) => video.id === id);

  // If no video is found, show a 404 page
  if (!video) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">{video.title}</h1>
      <VideoPlayer video={video} />
    </div>
  );
}
