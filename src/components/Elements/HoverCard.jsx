import { useState, useEffect, useMemo } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Check, ChevronDown, CircleSmall, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { createPortal } from "react-dom";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

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
    badge,
  } = movie;
  const { itemHeight, itemWidth, statusMovie } = type;

  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressBar), 100);
    return () => clearTimeout(timer);
  }, [progressBar]);

  const portraitPoster = useMemo(
    () => posters.find((p) => p.name === "portrait"),
    [posters],
  );

  const landscapePoster = useMemo(
    () => posters.find((p) => p.name === "landscape"),
    [posters],
  );

  const translateY = useMemo(() => {
    return statusMovie === "Watching" ? "150px" : "40px";
  }, [statusMovie]);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Card className={cn("border-none", itemHeight, itemWidth)}>
          <CardContent className="relative h-full w-full rounded-md p-0">
            <img
              src={
                (statusMovie === "Watching" ? landscapePoster : portraitPoster)
                  ?.image
              }
              alt={title}
              className="h-full w-full rounded-md object-cover"
            />
            {statusMovie === "Watching" && (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-linear-from-image to-linear-to-image opacity-50" />
                <div className="absolute bottom-0 left-0 flex w-full justify-between px-4 pb-4 text-light-primary">
                  <p className="text-s-bold sm:text-heading-xs">{title}</p>
                  <p className="flex items-center gap-1 text-2xs sm:text-s">
                    <Star size={windowWidth < 640 ? 12 : 16} fill="white" />{" "}
                    {rating}/5
                  </p>
                </div>
              </>
            )}
            {badge === "New" && (
              <div className="absolute left-2 top-0 sm:left-4 sm:top-4">
                <Badge className="pointer-events-none h-4 w-11 justify-center text-nowrap rounded-full bg-primary-300 px-1 py-[3px] text-[5.74px] font-bold text-light-primary sm:h-7 sm:w-28 sm:px-2 sm:py-1 sm:text-s-bold">
                  Episode Baru
                </Badge>
              </div>
            )}

            {badge === "Top 10" && (
              <div className="absolute right-1 top-[-10px] sm:right-3 sm:top-0">
                <Badge className="pointer-events-none h-[21.82px] w-[14.82px] justify-center text-wrap rounded-bl rounded-br-none rounded-tl-none rounded-tr bg-error-pressed p-[1.91px] text-center text-[6.69px] text-light-primary sm:h-12 sm:w-8 sm:p-1 sm:text-s">
                  Top 10
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </HoverCardTrigger>

      {createPortal(
        <HoverCardContent
          align="start"
          className="absolute bottom-0 z-50 h-[464px] w-[408px] rounded-lg border-none bg-other-extraBg p-0 shadow-none"
          style={{ transform: `translateX(-50px) translateY(${translateY})` }}
        >
          <div className="flex h-full w-full flex-col">
            <div className="h-64 w-full">
              <img
                src={landscapePoster?.image}
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

              <div className="justify-star flex w-full items-center">
                {status === "film" && (
                  <div className="flex items-center justify-start gap-5">
                    <Button className="pointer-events-none h-9 w-14 bg-info-bg text-light-secondary">
                      {certification}
                    </Button>
                    <p className="text-heading-s text-light-secondary">
                      {duration}
                    </p>
                  </div>
                )}
                {status === "series" && (
                  <div className="flex items-center justify-start gap-5">
                    <Button className="pointer-events-none h-9 w-14 bg-info-bg text-light-secondary">
                      {certification}
                    </Button>
                    <p className="text-heading-s text-light-secondary">
                      {episode}
                    </p>
                  </div>
                )}
                {status === "watchSeries" && (
                  <div className="flex w-full flex-col items-start justify-center gap-1">
                    <div className="w-full text-heading-s text-light-primary">
                      {now}
                    </div>
                    <div className="flex w-full items-center justify-start gap-4">
                      <Progress value={33} className="w-5/6" />
                      <p className="text-nowrap text-l-medium text-light-secondary">
                        {duration}
                      </p>
                    </div>
                  </div>
                )}
                {status === "watchFilm" && (
                  <div className="flex w-full flex-col items-start justify-center gap-1">
                    <div className="flex w-full items-center justify-start gap-4">
                      <Progress value={progress} className="w-5/6" />
                      <p className="text-nowrap text-l-medium text-light-secondary">
                        {duration}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-8 text-light-secondary">
                {genre.slice(0, 3).map((g, i) => (
                  <div key={`${g}-${i}`} className="flex items-center gap-8">
                    {i !== 0 && (
                      <CircleSmall
                        className="!h-4 !w-4 text-light-secondary"
                        fill="hsla(250, 81%, 94%, 0.68)"
                        stroke="none"
                      />
                    )}
                    <span className="text-l-bold">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HoverCardContent>,
        document.body,
      )}
    </HoverCard>
  );
};
