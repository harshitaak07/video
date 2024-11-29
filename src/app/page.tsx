import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[73vh] bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to Video Streamer
      </h1>
      <p className="text-lg text-center mb-8">Click below to explore.</p>
      <Link href="/videos">
        <button className="px-5 py-3 bg-rose-400 text-white rounded-lg hover:bg-rose-400">
          Browse Videos
        </button>
      </Link>
    </main>
  );
}
