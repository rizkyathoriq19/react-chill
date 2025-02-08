import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  (
    {
      className,
      type,
      placeholder,
      label,
      name,
      error,
      register,
      children,
      endContent,
    },
    ref,
  ) => {
    return (
      <div className="flex w-full flex-col gap-[6px]">
        {label && (
          <label htmlFor={name} className="text-start text-[18px] font-medium">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "border border-border-white border-opacity-[23%] bg-transparent px-5 py-[14px] text-base placeholder-text-light-secondary outline-none ring-border-white focus:ring-1 2xl:py-3",
              className,
            )}
          />
          {endContent && (
            <div className="absolute bottom-[13px] right-5 flex items-center text-xl text-text-light-disabled">
              {endContent}
            </div>
          )}
        </div>
        {error && (
          <span className="mt-0.5 text-xs text-[#f64949fe]">{error}</span>
        )}
        {children}
      </div>
    );
  },
);

export default Textbox;
