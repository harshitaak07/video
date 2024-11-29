import { NextResponse } from "next/server";

// Static video data
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

export async function GET() {
  return NextResponse.json(videos);
}
