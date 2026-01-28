import { Star, Calendar, Play, Heart, Info } from "lucide-react";
import { Link } from "react-router";

function FilmCard({ movie }) {
  return (
    <div className="row-span-3">
      <div className="group relative w-72 bg-linear-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-2">
        {/* Poster Image */}
        <div className="relative overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Action buttons on hover */}
          <div className="absolute gap-3 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 hover:bg-red-600 hover:scale-110 transition-all duration-300 cursor-pointer">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
            <Link
              to={`/movie/${movie.id}`}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              <Info className="w-5 h-5 text-white" />
            </Link>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-white">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>

          {/* Favorite Button */}
          <button className="absolute top-3 right-3 w-9 h-9 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 group/fav">
            <Heart className="w-4 h-4 text-white group-hover/fav:fill-white transition-all duration-300" />
          </button>

          {/* Media Type Badge */}
          <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold uppercase px-2.5 py-1 rounded-md tracking-wider">
            {movie.media_type || "Movie"}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg font-bold  text-white truncate group-hover:text-red-400 transition-colors duration-300">
            {movie.title}
          </h3>

          {/* Release Date */}
          <div className="flex items-center gap-2 mt-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              {new Date(movie.release_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Overview */}
          <p className="mt-3 text-sm text-gray-400 line-clamp-2 leading-relaxed">
            {movie.overview}
          </p>
        </div>

        {/* Bottom Gradient Border Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 via-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
}

export default FilmCard;
