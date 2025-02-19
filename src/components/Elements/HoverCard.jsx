import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Check, ChevronDown, CircleSmall, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export const HoverCardMovie = ({ movie, status, type }) => {
  const {
    duration,
    posters,
    title,
    genre,
    rating,
    certification,
    episode,
    now,
    progressBar,
  } = movie;

  const { itemHeight, itemWidth, statusMovie } = type;

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressBar), 100);
    return () => clearTimeout(timer);
  }, [progressBar]);

  const poster =
    statusMovie === "Watching"
      ? posters.find((p) => p.name === "landscape")
      : posters.find((p) => p.name === "portrait");

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Card
          className="border-none"
          style={{ height: itemHeight, width: itemWidth }}
        >
          <CardContent className="relative h-full w-full overflow-hidden rounded-md p-0">
            <img
              src={poster?.image}
              alt={title}
              className="h-full w-full rounded-md object-cover"
            />
            {statusMovie === "Watching" && (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-linear-from-image to-linear-to-image opacity-50"></div>
                <div className="absolute bottom-0 left-0 flex w-full justify-between px-4 pb-4 text-light-primary">
                  <p className="text-heading-xs">{title}</p>
                  <p className="flex items-center gap-1 text-s">
                    <Star size={16} fill="white" /> {rating}/5
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </HoverCardTrigger>

      <HoverCardContent
        side="center"
        className="h-auto min-h-[464px] w-[408px] rounded-lg border-none bg-other-pageHeaderBg p-0 shadow-none"
      >
        <div className="flex h-full w-full flex-col">
          <div className="h-64 w-full">
            <img
              src={poster?.image}
              alt={title}
              className="h-full w-full rounded-t-lg object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-7">
            <div className="flex w-full items-center justify-start gap-5">
              <Button className="h-11 w-11 bg-light-primary p-2 text-center text-black">
                <Play fill="black" />
              </Button>
              <Button
                className="h-12 w-12 border-light-disabled bg-transparent p-2 text-center text-light-primary"
                variant="outlined"
              >
                <Check strokeWidth={2} className="!h-6 !w-6" />
              </Button>
              <Button
                className="ml-auto h-12 w-12 border-light-disabled bg-transparent p-1 text-center text-light-primary"
                variant="outlined"
              >
                <ChevronDown strokeWidth={2} className="!h-7 !w-7" />
              </Button>
            </div>

            <div>
              {status === "film" && (
                <div className="flex items-center justify-start gap-5">
                  <Button className="h-9 w-14 bg-info-bg text-light-secondary">
                    {certification}
                  </Button>
                  <p className="text-heading-s">{duration}</p>
                </div>
              )}
              {status === "series" && (
                <div className="flex items-center justify-start gap-5">
                  <Button className="h-9 w-14 bg-info-bg text-light-secondary">
                    {certification}
                  </Button>
                  <p className="text-heading-s">{episode}</p>
                </div>
              )}
              {status === "watchSeries" && (
                <div className="flex flex-col items-center justify-start gap-4">
                  <div className="text-heading-s text-light-primary">{now}</div>
                  <div className="flex gap-4">
                    <Progress value={progress} />
                    <p className="text-l-medium text-light-secondary">
                      {duration}
                    </p>
                  </div>
                </div>
              )}
              {status === "watchFilm" && (
                <div className="flex items-center justify-start gap-4">
                  <div className="flex gap-4">
                    <Progress value={progress} />
                    <p className="text-l-medium text-light-secondary">
                      {duration}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-8 text-light-secondary">
              {genre.slice(0, 3).map((g, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i !== 0 && (
                    <CircleSmall
                      className="!h-4 !w-4 text-light-secondary"
                      fill="hsla(250, 81%, 94%, 0.68)"
                      stroke="none"
                    />
                  )}
                  <span key={i} className="text-l-bold">
                    {g}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
