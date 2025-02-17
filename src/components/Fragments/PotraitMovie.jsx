import { TypographyH3 } from "../Elements/Typography";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PotraitMovie = (props) => {
  const { title } = props;
  return (
    <div className="flex w-full flex-col gap-8 bg-other-page-header-bg px-20 py-10">
      <TypographyH3>{title}</TypographyH3>
      <div className="relative w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex w-full gap-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-5/6 md:basis-1/5">
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex aspect-square h-[162px] w-[302px] items-center justify-center rounded-md p-4">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-8 top-1/2 z-10 -translate-y-1/2 transform">
            <CarouselPrevious className="h-11 w-11 border-other-outline-border bg-other-body-bg" />
          </div>
          <div className="absolute right-8 top-1/2 z-10 -translate-y-1/2 transform">
            <CarouselNext className="h-11 w-11 border-other-outline-border bg-other-body-bg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PotraitMovie;
