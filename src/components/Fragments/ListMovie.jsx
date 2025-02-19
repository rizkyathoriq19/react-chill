import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import dummyMovie from "@/data/dummyMovie";
import { HoverCardMovie } from "@/components/Elements/HoverCard";

const ListMovie = ({ title, status }) => {
  const filteredMovies = dummyMovie.filter((movie) =>
    movie.status.some((s) => s.name === status),
  );

  const itemConfig = {
    Watching: {
      itemBasis: "basis-1/4",
      itemHeight: "162px",
      itemWidth: "302px",
    },
    "Top-Rating": {
      itemBasis: "basis-1/5",
      itemHeight: "365px",
      itemWidth: "234px",
    },
    "Film-Trending": {
      itemBasis: "basis-1/5",
      itemHeight: "365px",
      itemWidth: "234px",
    },
    "New-Release": {
      itemBasis: "basis-1/5",
      itemHeight: "365px",
      itemWidth: "234px",
    },
  };

  return (
    <div className="flex w-full flex-col gap-8 bg-other-pageHeaderBg px-20 py-10">
      <h3 className="text-heading-l">{title}</h3>
      <div className="w-full">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="flex w-full gap-1">
            {filteredMovies.map((movie) => {
              const isWatching = movie.status.some(
                (s) => s.name === "Watching",
              );
              const statusMovie =
                isWatching && movie.type === "Film"
                  ? "watchFilm"
                  : isWatching && movie.type === "TV Series"
                    ? "watchSeries"
                    : movie.type === "Film"
                      ? "film"
                      : "series";

              return (
                <CarouselItem
                  key={movie.id}
                  className={cn(itemConfig[status].itemBasis)}
                >
                  <HoverCardMovie
                    movie={movie}
                    status={statusMovie}
                    type={{
                      itemHeight: itemConfig[status].itemHeight,
                      itemWidth: itemConfig[status].itemWidth,
                      statusMovie: status,
                    }}
                  />
                </CarouselItem>
              );
            })}
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
