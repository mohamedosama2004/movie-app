import { PacmanLoader } from "react-spinners";
import { Film } from "lucide-react";

function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Pacman Loader */}
      <div className="mb-8">
        <PacmanLoader color="#ef4444" size={35} />
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
          Movie Home
        </h2>
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          <span className="inline-block animate-pulse">
            Loading your cinematic experience
          </span>
        </p>
      </div>

      {/* Animated Dots */}
      <div className="flex gap-2 mt-6">
        <span
          className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></span>
        <span
          className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></span>
        <span
          className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></span>
      </div>
    </div>
  );
}

export default Loading;
