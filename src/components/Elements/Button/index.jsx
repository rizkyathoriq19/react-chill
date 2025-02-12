import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ButtonOutline = (props) => {
  const { children, className } = props;
  return (
    <Button
      variant="outline"
      className={cn(
        "hover:text-other-extra-text hover:other-outline-border h-7 w-full rounded-full border-other-outline-border bg-other-extra-bg text-base text-small-mb hover:bg-other-paper-bg sm:h-12 sm:text-base",
        className,
      )}
    >
      {children}
    </Button>
  );
};

export const ButtonWithIcon = (props) => {
  const { children, className, logo } = props;

  return (
    <ButtonOutline className={cn(className)}>
      <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
        <img src={logo} alt="Logo" className="h-2 w-2 sm:h-4 sm:w-4" />
        {children}
      </div>
    </ButtonOutline>
  );
};

export const AuthButton = (props) => {
  const { buttonName, iconButtonName, children, icon } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
      <ButtonOutline type="submit">{buttonName}</ButtonOutline>
      <p className="text-[9px] font-medium text-text-light-secondary sm:text-sm">
        {children}
      </p>
      <ButtonWithIcon logo={icon} type="button" className="bg-transparent">
        {iconButtonName}
      </ButtonWithIcon>
    </div>
  );
};
