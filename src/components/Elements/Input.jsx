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
      <Label htmlFor={label} className="text-2xs-medium sm:text-l-medium">
        {label}
      </Label>
      <Input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="h-7 px-3 py-1 text-2xs placeholder:text-2xs sm:h-12 sm:px-5 sm:py-2 sm:text-base sm:placeholder:text-base"
      />
    </div>
  );
});

const IconSize = (props) => {
  const { children } = props;
  return (
    <div className="h-4 w-4 text-light-disabled sm:h-6 sm:w-6">{children}</div>
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
        <p className="text-2xs text-light-secondary sm:text-m">
          {leftDesc}{" "}
          <Link
            to={leftLink}
            className="cursor-pointer text-2xs-medium text-light-primary sm:text-s"
          >
            {linkText}
          </Link>
        </p>
        <Link
          to={rightLink}
          className="cursor-pointer text-2xs text-light-primary sm:text-m"
        >
          {rightDesc}
        </Link>
      </div>
    </div>
  );
});

/*
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const InputWithCustomFeatures = React.forwardRef(
  ({ 
    type, 
    placeholder, 
    label, 
    className, 
    isPassword, 
    iconShow, 
    iconHide, 
    leftDesc, 
    rightDesc, 
    leftLink, 
    rightLink, 
    linkText, 
    setIsVisible = () => {}, 
    isVisible, 
    ...props 
  }, ref) => {
    return (
      <div className="relative flex flex-col justify-center gap-2">
        <div className={cn("flex w-full flex-col justify-center gap-1 sm:gap-2", className)}>
          <Label htmlFor={label} className="text-2xs-medium sm:text-l-medium">
            {label}
          </Label>
          <Input
            ref={ref}
            type={isPassword && !isVisible ? "password" : type}
            placeholder={placeholder}
            className="h-7 px-3 py-1 text-2xs placeholder:text-2xs sm:h-12 sm:px-5 sm:py-2 sm:text-base sm:placeholder:text-base"
            {...props}
          />
        </div>

        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-[65%] -translate-y-1/2 sm:right-5 sm:top-[70%]"
            onClick={() => setIsVisible(!isVisible)}
          >
            <div className="h-4 w-4 text-light-disabled sm:h-6 sm:w-6">
              {isVisible ? iconShow : iconHide}
            </div>
          </button>
        )}

        {(leftDesc || rightDesc) && (
          <div className="mt-2 flex justify-between">
            {leftDesc && (
              <p className="text-2xs text-light-secondary sm:text-m">
                {leftDesc}{" "}
                <Link
                  to={leftLink}
                  className="cursor-pointer text-2xs-medium text-light-primary sm:text-s"
                >
                  {linkText}
                </Link>
              </p>
            )}
            {rightDesc && (
              <Link
                to={rightLink}
                className="cursor-pointer text-2xs text-light-primary sm:text-m"
              >
                {rightDesc}
              </Link>
            )}
          </div>
        )}
      </div>
    );
  }
);

export default InputWithCustomFeatures;

*/
