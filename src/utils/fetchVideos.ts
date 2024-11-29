export async function fetchVideos() {
  const res = await fetch("/api/videos");
  return await res.json();
}
