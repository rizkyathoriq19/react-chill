import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardWithForm({
  titleLogo,
  titleName,
  titleDesc,
  titleSubDesc,
  label,
  id,
  type = "text",
  placeholder = "",
}) {
  return (
    <Card className="w-[309px] rounded-2xl border-none bg-auth-bg p-5 text-text-light-primary sm:w-[529px] sm:p-10">
      <CardHeader className="flex flex-col items-center gap-6 sm:gap-8">
        <CardTitle className="item-center gap.0.1 flex justify-center leading-none sm:gap-1">
          <img
            src={titleLogo}
            alt="Logo"
            className="h-[19.82] w-[24.59px] self-center sm:h-[36.34px] sm:w-[42.56px]"
          />
          <h1 className="text-center font-londrina text-title-mb font-normal sm:text-title">
            {titleName}
          </h1>
        </CardTitle>
        <div className="flex flex-col items-center justify-center gap-1.1 leading-none sm:gap-2">
          <h3 className="text-large font-bold sm:text-large-2">{titleDesc}</h3>
          <p className="text-small-mb sm:text-small">{titleSubDesc}</p>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor={id}>{label}</Label>
              <Input
                type={type}
                id={id}
                placeholder={placeholder}
                className="h-11 rounded-3xl border border-other-outline-border bg-transparent px-5 py-3 placeholder-text-light-secondary focus:ring-1 focus:ring-white"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
