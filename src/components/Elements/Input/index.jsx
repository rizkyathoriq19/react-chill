import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

export const InputWithLabel = React.forwardRef(({ ...props }, ref) => {
  const { type, placeholder, label, className } = props;
  return (
    <div
      className={cn(
        "flex w-full flex-col justify-center gap-1 sm:gap-2",
        className,
      )}
    >
      <Label htmlFor={label} className="text-xs-medium sm:text-lg">
        {label}
      </Label>
      <Input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="h-7 px-3 py-1 text-[9px] placeholder:text-[9px] sm:h-12 sm:px-5 sm:py-2 sm:text-base sm:placeholder:text-base"
      />
    </div>
  );
});

const IconSize = (props) => {
  const { children } = props;
  return (
    <div className="h-4 w-4 text-text-light-disabled sm:h-6 sm:w-6">
      {children}
    </div>
  );
};

export const InputWithPassword = React.forwardRef(({ ...props }, ref) => {
  const {
    type,
    placeholder,
    label,
    className,
    isVisible,
    iconShow,
    iconHide,
    setIsVisible = () => {},
  } = props;
  return (
    <div className="relative flex flex-col justify-center gap-2">
      <InputWithLabel
        type={type}
        ref={ref}
        label={label}
        placeholder={placeholder}
        className={cn(className)}
      />
      <button
        type="button"
        className="absolute right-3 top-[65%] -translate-y-1/2 sm:right-5 sm:top-[70%]"
        onClick={() => setIsVisible(!isVisible)}
      >
        <IconSize>{isVisible ? iconShow : iconHide}</IconSize>
      </button>
    </div>
  );
});

export const InputWithPassDesc = React.forwardRef(({ ...props }, ref) => {
  const {
    type,
    placeholder,
    label,
    className,
    isVisible,
    iconShow,
    iconHide,
    setIsVisible = () => {},
    leftDesc,
    rightDesc,
    leftLink,
    rightLink,
    linkText,
  } = props;
  return (
    <div>
      <InputWithPassword
        type={type}
        ref={ref}
        label={label}
        placeholder={placeholder}
        className={cn(className)}
        iconShow={iconShow}
        iconHide={iconHide}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <div className="mt-2 flex justify-between">
        <p className="text-xs-medium text-text-light-secondary sm:text-base">
          {leftDesc}{" "}
          <Link
            to={leftLink}
            className="text-xs-medium cursor-pointer text-text-light-primary sm:text-sm"
          >
            {linkText}
          </Link>
        </p>
        <Link
          to={rightLink}
          className="text-xs-medium cursor-pointer sm:text-sm"
        >
          {rightDesc}
        </Link>
      </div>
    </div>
  );
});
