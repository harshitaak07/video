import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Video Streamer",
  description: "A gallery of memorable Videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navigation Bar */}
        <header className="w-full bg-rose-400 text-white py-4 shadow-md">
          <nav className="max-w-7xl mx-auto flex justify-between items-center px-6">
            <Link href="/">
              <h1 className="text-2xl font-bold">Video Streamer</h1>
            </Link>
            <Link href="/videos" className="text-lg hover:underline">
              Videos
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-rose-400 text-white py-4 text-center">
          <p>&copy; 2024 Video Streamer. All rights reserved by Harshitaa.</p>
        </footer>
      </body>
    </html>
  );
}
