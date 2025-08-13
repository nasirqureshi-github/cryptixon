import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h2 className="text-3xl font-bold text-red-600">404 - Not Found</h2>
      <p className="mt-2 text-gray-600">Could not find the requested resource.</p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-[#2258BF] text-white rounded-lg hover:bg-[#1A4494]"
      >
        Return Home
      </Link>
    </div>
  );
}
