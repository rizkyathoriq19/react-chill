import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function InputWithLabel({
  label,
  id,
  type = "text",
  placeholder = "",
  labelClassName,
  inputClassName,
  endContent,
  error,
  children,
  ...props
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id} className={cn("", labelClassName)}>
        {label}
      </Label>

      <div className="relative">
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          className={cn("", inputClassName)}
          {...props}
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
}
