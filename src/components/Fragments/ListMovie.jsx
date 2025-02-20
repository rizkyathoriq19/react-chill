import { useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HoverCardMovie } from "@/components/Elements/HoverCard";
import { cn } from "@/lib/utils";
import dummyMovie from "@/data/dummyMovie";
import itemConfig from "@/data/itemConfig";

const ListMovie = ({ title, status }) => {
  const filteredMovies = useMemo(
    () =>
      dummyMovie.filter((movie) => movie.status.some((s) => s.name === status)),
    [status],
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
    <div className="flex w-full flex-col gap-8 bg-other-pageHeaderBg px-20 py-10">
      <h3 className="text-heading-l">{title}</h3>
      <div className="w-full">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="flex w-full gap-1">
            {filteredMovies.map((movie) => (
              <CarouselItem
                key={movie.id}
                className={cn(itemConfig[status].itemBasis)}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-7 top-1/2 z-10 -translate-y-1/2 transform">
            <CarouselPrevious className="h-11 w-11 border-other-outlineBorder bg-other-bodyBg" />
          </div>
          <div className="absolute right-7 top-1/2 z-10 -translate-y-1/2 transform">
            <CarouselNext className="h-11 w-11 border-other-outlineBorder bg-other-bodyBg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ListMovie;
