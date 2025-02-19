import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import dummyMovie from "@/data/dummyMovie";

const ListMovie = ({ title, status }) => {
  const filteredMovies = dummyMovie.filter(
    (movie) => movie.status.name.toLowerCase() === status.toLowerCase(),
  );

  const itemBasis = status === "Watching" ? "basis-1/4" : "basis-1/5";
  const itemHeight = status === "Watching" ? "162px" : "365px";
  const itemWidth = status === "Watching" ? "302px" : "234px";

  return (
    <div className="flex w-full flex-col gap-8 bg-other-pageHeaderBg px-20 py-10">
      <h3 className="text-heading-l">{title}</h3>
      <div className="relative w-full">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="flex w-full gap-1">
            {filteredMovies.map((movie) => (
              <CarouselItem key={movie.id} className={cn(itemBasis)}>
                <div>
                  <Card
                    className="border-none"
                    style={{ height: itemHeight, width: itemWidth }}
                  >
                    <CardContent className="relative h-full w-full overflow-hidden rounded-md p-0">
                      <img
                        src={movie.poster.image}
                        alt={movie.title}
                        className="h-full w-full rounded-md object-cover"
                      />
                      {status === "Watching" && (
                        <>
                          <div className="from-linear-from-image to-linear-to-image absolute inset-0 bg-gradient-to-b opacity-50"></div>
                          <div className="absolute bottom-0 left-0 flex w-full justify-between px-4 pb-4 text-light-primary">
                            <p className="text-heading-xs">{movie.title}</p>
                            <p className="flex items-center gap-1 text-s">
                              <Star size={16} /> {movie.rating}/5
                            </p>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
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
