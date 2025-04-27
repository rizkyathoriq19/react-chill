import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HoverCardMovie } from "@/components/Elements/HoverCard";
import { cn } from "@/lib/utils";
import itemConfig from "@/data/itemConfig";
import { setMovies } from "@/store/redux/movieReducer";
import { fetchMovies } from "@/api/movieApi";

const ListMovie = ({ title, status }) => {
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
    <div className="w-full bg-other-pageHeaderBg py-5 sm:py-10">
      <h3 className="mb-5 px-5 text-heading-s sm:mb-8 sm:px-20 sm:text-heading-l">
        {title}
      </h3>

      <div className="relative w-full overflow-visible pl-5 pr-0 sm:px-20">
        <Carousel
          opts={{ align: "start", loop: true, drag: "free" }}
          className="w-full"
        >
          <CarouselContent className="flex w-full gap-1 overflow-visible pe-[calc(100vw-100%)] sm:pe-0">
            {filteredMovies.map((movie) => (
              <CarouselItem
                key={movie.id}
                className={cn(itemConfig[status].itemBasis, "shrink-0")}
              >
                <div
                  className={`${
                    typeof window !== "undefined" && window.innerWidth < 600
                      ? "pointer-events-none"
                      : ""
                  }`}
                >
                  <HoverCardMovie
                    movie={movie}
                    status={getStatusMovie(movie)}
                    type={{
                      itemHeight: itemConfig[status].itemHeight,
                      itemWidth: itemConfig[status].itemWidth,
                      statusMovie: status,
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 transform sm:block">
            <CarouselPrevious className="h-11 w-11 border-other-outlineBorder bg-other-bodyBg" />
          </div>
          <div className="absolute right-9 top-1/2 z-10 hidden -translate-y-1/2 transform sm:block">
            <CarouselNext className="h-11 w-11 border-other-outlineBorder bg-other-bodyBg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ListMovie;
