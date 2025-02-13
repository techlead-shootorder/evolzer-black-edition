export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Neon Glow Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin-slow"></div>
      </div>
      {/* Loading Text with Animated Dots */}
      <p className="mt-6 text-lg font-semibold text-gray-300">
        Loading<span className="ml-2 inline-block animate-dot-flash">...</span>
      </p>
    </div>
  );
}
