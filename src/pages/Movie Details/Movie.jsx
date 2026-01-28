import {
  Star,
  Clock,
  Calendar,
  Globe,
  Play,
  Heart,
  Share2,
  ArrowLeft,
  Film,
  DollarSign,
  Building2,
  Info,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loading from "../../components/Loading/Loading";

const KEY = "f3a4e52028bac633c2c92b351bafe8a7";
const IMAGE_BASE = "https://image.tmdb.org/t/p";

// Helper function to format runtime
function formatRuntime(minutes) {
  if (!minutes) return "N/A";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

// Helper function to format currency
function formatCurrency(amount) {
  if (!amount || amount === 0) return "Not Available";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Helper function to format date
function formatDate(dateString) {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Helper function to get language name
function getLanguageName(code) {
  const languages = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    zh: "Chinese",
    hi: "Hindi",
    ar: "Arabic",
    pt: "Portuguese",
    ru: "Russian",
  };
  return languages[code] || code?.toUpperCase() || "N/A";
}

// Helper function to get country name
function getCountryName(code) {
  const countries = {
    US: "United States",
    GB: "United Kingdom",
    FR: "France",
    DE: "Germany",
    JP: "Japan",
    KR: "South Korea",
    CN: "China",
    IN: "India",
    CA: "Canada",
    AU: "Australia",
  };
  return countries[code] || code || "N/A";
}

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`
        );
        const data = await response.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      getDetails();
    }, 1000);

  }, [id]);

  if (loading || !movie) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen text-white">
      {/* Backdrop Image Section */}
      <div className="relative h-[500px] w-full">
        {movie.backdrop_path ? (
          <img
            src={`${IMAGE_BASE}/original${movie.backdrop_path}`}
            alt={`${movie.title} Backdrop`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent" />

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 hover:bg-red-500 px-4 py-2 rounded-full transition-all duration-300 group backdrop-blur-sm"
        >
          <ArrowLeft
            size={20}
            className="group-hover:translate-x-[-2px] transition-transform duration-300"
          />
          <span>Back</span>
        </Link>

        {/* Favorite Button */}
        <button className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 group">
          <Heart className="w-5 h-5 text-white group-hover:fill-white transition-all duration-300" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-72 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="shrink-0 group">
            <div className="relative">
              {movie.poster_path ? (
                <img
                  src={`${IMAGE_BASE}/w500${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  className="w-64 md:w-80 rounded-xl shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-64 md:w-80 h-96 md:h-[480px] bg-gray-800 rounded-xl flex items-center justify-center">
                  <Film size={64} className="text-gray-600" />
                </div>
              )}
              {/* Play Button Overlay */}
              {movie.homepage && (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 hover:bg-red-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </a>
              )}
              {/* Bottom Gradient Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 via-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl" />
            </div>
          </div>

          {/* Movie Info */}
          <div className="flex-1 pt-4 md:pt-32">
            {/* Title & Tagline */}
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {movie.title}
            </h1>
            {movie.tagline && (
              <p className="text-xl bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent italic mb-6 font-medium">
                "{movie.tagline}"
              </p>
            )}

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">
                  {movie.vote_average?.toFixed(1) || "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Clock size={18} />
                <span>{formatRuntime(movie.runtime)}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Calendar size={18} />
                <span>{formatDate(movie.release_date)}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Globe size={18} />
                <span>{getLanguageName(movie.original_language)}</span>
              </div>
            </div>

            {/* Genres */}
            {movie.genres && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-sm font-medium text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {movie.homepage && (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  <Play size={20} fill="currentColor" />
                  Watch Now
                </a>
              )}
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/20">
                <Heart size={20} />
                Add to Favorites
              </button>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-3 rounded-full transition-all duration-300 border border-white/20">
                <Share2 size={20} />
              </button>
            </div>

            {/* Overview */}
            {movie.overview && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Info size={24} className="text-red-500" />
                  Overview
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {movie.overview}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 pb-12">
          {/* Production Companies */}
          <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group relative overflow-hidden">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Building2 size={22} className="text-red-500" />
              Production <span className="text-red-500">Companies</span>
            </h3>
            <div className="space-y-4">
              {movie.production_companies &&
              movie.production_companies.length > 0 ? (
                movie.production_companies.slice(0, 4).map((company) => (
                  <div
                    key={company.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    {company.logo_path ? (
                      <img
                        src={`${IMAGE_BASE}/w92${company.logo_path}`}
                        alt={company.name}
                        className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Film size={24} className="text-gray-400" />
                      </div>
                    )}
                    <span className="text-gray-300 text-sm">{company.name}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No information available</p>
              )}
            </div>
            {/* Bottom Gradient Border Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 via-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>

          {/* Movie Stats */}
          <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group relative overflow-hidden">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <DollarSign size={22} className="text-red-500" />
              Movie <span className="text-red-500">Stats</span>
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                <span className="text-gray-400">Status</span>
                <span
                  className={`font-semibold px-3 py-1 rounded-full text-sm ${
                    movie.status === "Released"
                      ? "text-green-400 bg-green-500/10"
                      : "text-yellow-400 bg-yellow-500/10"
                  }`}
                >
                  {movie.status || "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                <span className="text-gray-400">Budget</span>
                <span className="text-gray-300">{formatCurrency(movie.budget)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                <span className="text-gray-400">Revenue</span>
                <span className="text-gray-300">{formatCurrency(movie.revenue)}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">Vote Count</span>
                <span className="text-gray-300">
                  {movie.vote_count ? `${movie.vote_count.toLocaleString()} votes` : "N/A"}
                </span>
              </div>
            </div>
            {/* Bottom Gradient Border Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 via-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>

          {/* Additional Info */}
          <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group relative overflow-hidden">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe size={22} className="text-red-500" />
              Additional <span className="text-red-500">Info</span>
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                <span className="text-gray-400">Original Title</span>
                <span className="text-gray-300 text-right text-sm max-w-[150px] truncate">
                  {movie.original_title || "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                <span className="text-gray-400">Original Language</span>
                <span className="text-gray-300">
                  {getLanguageName(movie.original_language)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                <span className="text-gray-400">Origin Country</span>
                <span className="text-gray-300">
                  {movie.origin_country && movie.origin_country.length > 0
                    ? getCountryName(movie.origin_country[0])
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">IMDB ID</span>
                {movie.imdb_id ? (
                  <a
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    {movie.imdb_id}
                  </a>
                ) : (
                  <span className="text-gray-300">N/A</span>
                )}
              </div>
            </div>
            {/* Bottom Gradient Border Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 via-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
