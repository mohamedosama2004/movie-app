import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import FilmCard from "../../components/FilmCard/FilmCard";

const KEY = "f3a4e52028bac633c2c92b351bafe8a7";
const BASE_URL = "https://api.themoviedb.org/3/trending/movie";
// const BASE_URL = "https://api.themoviedb.org/3/trending/movie?api_key=f3a4e52028bac633c2c92b351bafe8a7";

function Home() {
  // ! https://api.themoviedb.org/3/trending/movie/{time_window}
  const [treandingMovies, setTrendingMovies] = useState(null);
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(`${BASE_URL}/week?api_key=${KEY}`);
        const data = await response.json();
        console.log(data);
        setTrendingMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }
    setTimeout(()=>{
        getMovies();
    },1500)
  }, []);

  return (
    <>
      {!treandingMovies ? (
        <Loading />
      ) : (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Trending <span className="text-red-500">Movies</span>
              </h2>
              <p className="text-gray-400">Discover what's popular this week</p>
            </div>

            {/* Film Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {treandingMovies.map((movie) => (
                <FilmCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
