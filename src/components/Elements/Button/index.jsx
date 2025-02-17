import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ButtonPrimary = (props) => {
  const { children, className } = props;
  return (
    <Button
      className={cn(
        "h-5 w-full rounded-full bg-primary-300 text-xs font-bold text-text-light-primary hover:bg-primary-100 sm:h-10 sm:text-base",
        className,
      )}
    >
      {children}
    </Button>
  );
};

export const ButtonOutline = (props) => {
  const { children, className } = props;
  return (
    <Button
      variant="outline"
      className={cn(
        "hover:text-other-extra-text hover:other-outline-border text-xs-medium h-7 w-full rounded-full border-other-outline-border bg-other-extra-bg text-base hover:bg-other-paper-bg sm:h-12 sm:text-base",
        className,
      )}
    >
      {children}
    </Button>
  );
};

export const ButtonAction = (props) => {
  const { children, className } = props;

  return (
    <Button
      className={cn(
        "h-7 w-7 rounded-full border border-text-light-secondary bg-transparent text-text-light-secondary",
        className,
      )}
    >
      {children}
    </Button>
  );
};

export const ButtonWithIcon = (props) => {
  const { children, className, icon } = props;

  return (
    <ButtonOutline className={cn(className)}>
      <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
        <img src={icon} alt="Icon" className="h-2 w-2 sm:h-4 sm:w-4" />
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
      <ButtonWithIcon icon={icon} type="button" className="bg-transparent">
        {iconButtonName}
      </ButtonWithIcon>
    </div>
  );
};

export const ButtonWithAvatar = React.forwardRef(({ ...props }, ref) => {
  const { icon, avatar } = props;

  return (
    <Button
      ref={ref}
      variant="default"
      size="icon"
      className="bg-transparent p-0 hover:bg-transparent focus-visible:ring-0"
    >
      <Avatar>
        <AvatarImage src={avatar} alt="avatar icon" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {icon && <div className="pointer-events-auto">{icon}</div>}
    </Button>
  );
});
