import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HoverCardMovie } from "../Elements/HoverCard";
import itemConfig from "@/data/listItemConfig";
import { cn } from "@/lib/utils";
import { setMovies } from "@/store/redux/movieReducer";
import { fetchMovies } from "@/api/movieApi";

const MyList = ({ status }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies();
      dispatch(setMovies(fetchedMovies));
    };

    getMovies();
  }, [dispatch]);

  const filteredMovies = movies.filter((movie) =>
    movie.status?.some((s) => s.name === status),
  );

  const getStatusMovie = (movie) => {
    const isWatching = movie.status.some((s) => s.name === "Watching");
    return isWatching
      ? movie.type === "Film"
        ? "watchFilm"
        : "watchSeries"
      : movie.type === "Film"
        ? "film"
        : "series";
  };

  return (
    <div className="flex w-full flex-col items-start gap-4 bg-other-pageHeaderBg px-5 text-light-primary sm:gap-8 sm:px-20 sm:pb-20 sm:pt-10">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-heading-s sm:text-heading-l">Daftar Saya</h3>
        <a
          href="/home/movies"
          className="ml-auto hidden cursor-pointer text-l sm:inline-block"
        >
          Lihat Semua
        </a>
      </div>
      <div className="relative flex w-full flex-wrap gap-4 overflow-visible">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className={cn(isMobile && "pointer-events-none")}
            style={{
              width: itemConfig[status]?.itemWidth,
              height: itemConfig[status]?.itemHeight,
            }}
          >
            <HoverCardMovie
              movie={movie}
              status={getStatusMovie(movie)}
              type={{
                itemHeight: itemConfig[status]?.itemHeight,
                itemWidth: itemConfig[status]?.itemWidth,
                statusMovie: status,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
