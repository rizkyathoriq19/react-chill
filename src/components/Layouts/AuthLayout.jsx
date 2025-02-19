import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icon from "@/assets";

const AuthLayout = (props) => {
  const { titleDesc, titleSubDesc, children } = props;
  return (
    <Card className="w-[309px] rounded-2xl border-none bg-auth-bg p-5 text-light-primary sm:w-[529px] sm:p-10">
      <CardHeader className="mb-5 flex flex-col items-center gap-5 p-0 sm:mb-9 sm:gap-9">
        <CardTitle className="item-center gap.0.1 flex justify-center leading-none sm:gap-1">
          <img
            src={Icon.logo}
            alt="Logo"
            className="h-[19.82px] w-[24.59px] self-center sm:h-[36.34px] sm:w-[42.56px]"
          />
          <h1 className="text-center font-londrina text-title-mb sm:text-title">
            CHILL
          </h1>
        </CardTitle>
        <div className="flex flex-col items-center justify-center gap-1.1 leading-none sm:gap-2">
          <h3 className="text-l-bold sm:text-heading-l">{titleDesc}</h3>
          <p className="text-2xs sm:text-m">{titleSubDesc}</p>
        </div>
      </CardHeader>
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  );
};

export default AuthLayout;
