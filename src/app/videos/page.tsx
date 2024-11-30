"use client";
import VideoList from "@/components/videoList";
import React from "react";
export default function VideosPage() {
  return (
    <main>
      <h1 className="text-center text-2xl font-bold my-5">Videos</h1>
      <VideoList />
    </main>
  );
}
