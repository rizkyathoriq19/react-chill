import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";

export const InputWithLabel = React.forwardRef(
  ({ label, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex w-full flex-col justify-center gap-1 sm:gap-2",
          className,
        )}
      >
        {label && (
          <Label htmlFor={label} className="text-2xs-medium sm:text-l-medium">
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          className="h-7 px-3 py-1 text-2xs placeholder:text-2xs sm:h-12 sm:px-5 sm:py-2 sm:text-base sm:placeholder:text-base"
          {...props}
        />
      </div>
    );
  },
);

const IconSize = ({ children }) => (
  <div className="h-4 w-4 text-light-disabled sm:h-6 sm:w-6">{children}</div>
);

export const InputWithPassword = React.forwardRef(
  ({ isVisible, setIsVisible, iconShow, iconHide, ...props }, ref) => {
    return (
      <div className="relative flex flex-col justify-center gap-2">
        <InputWithLabel
          ref={ref}
          {...props}
          type={isVisible ? "text" : "password"}
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
  },
);

export const InputWithPassDesc = React.forwardRef(
  ({ leftDesc, rightDesc, leftLink, rightLink, linkText, ...props }, ref) => {
    return (
      <div>
        <InputWithPassword ref={ref} {...props} />
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
      </div>
    );
  },
);

export const InputWithEdit = React.forwardRef(
  (
    {
      label,
      defaultValue,
      onEditClick,
      disabled = true,
      type = "text",
      className,
      showEditIcon = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "relative flex flex-col justify-center gap-1 sm:gap-2",
          className,
        )}
      >
        {label && (
          <Label htmlFor={label} className="text-2xs-medium sm:text-l-medium">
            {label}
          </Label>
        )}
        <div className="relative">
          <Input
            ref={ref}
            type={type}
            className="h-7 !rounded-[8px] border border-other-outlineBorder bg-other-paperBg px-3 py-1 text-2xs placeholder:text-2xs sm:h-12 sm:px-5 sm:py-2 sm:text-base sm:placeholder:text-base"
            defaultValue={defaultValue}
            disabled={disabled}
            {...props}
          />
          {showEditIcon && onEditClick && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent focus-visible:ring-0 sm:right-5"
              onClick={onEditClick}
            >
              <div className="h-2 w-2 text-light-primary sm:h-4 sm:w-4">
                <Pencil size="100%" />
              </div>
            </button>
          )}
        </div>
      </div>
    );
  },
);
