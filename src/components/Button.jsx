import clsx from "clsx";

const Button = ({
  icon,
  type,
  className,
  label,
  children,
  onClick = () => {},
}) => {
  return (
    <button
      type={type || "button"}
      className={clsx(
        "border border-other-outline-border px-5 py-[14px] font-semibold outline-none",
        className,
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        {children}
        <span>{label}</span>
        {icon && icon}
      </div>
    </button>
  );
};

export default Button;
