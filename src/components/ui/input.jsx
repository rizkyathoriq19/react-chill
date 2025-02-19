import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-full border border-other-outlineBorder bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-light-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-light-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
