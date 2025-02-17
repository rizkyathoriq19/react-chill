import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "../ui/button";
import { ButtonAction } from "../Elements/Button";

export const HoverCards = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button>Button</Button>
      </HoverCardTrigger>
      <HoverCardContent className="h-[465px] w-[408px] p-0">
        <div className="flex h-full w-full flex-col justify-start gap-0">
          <div className="h-1/2 bg-red-300">Gambar</div>
          <div className="flex bg-blue-300 p-7">
            <div className="flex w-full justify-center">
              <ButtonAction className="mr-4">Button</ButtonAction>
              <ButtonAction>Button</ButtonAction>
              <ButtonAction className="ml-auto">Button</ButtonAction>
            </div>
            <div className="flex w-full"></div>
            <div></div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
