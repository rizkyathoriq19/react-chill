import { cn } from "@/lib/utils";

export const Circle = ({ children, size = 24, className }) => {
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-full border border-text-light-secondary",
        className,
      )}
      style={{ width: size, height: size, padding: 10 }}
    >
      {children}
    </span>
  );
};
