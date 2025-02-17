import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Links = ({ children, className, to }) => {
  return (
    <Link to={to} className={cn("", className)}>
      {children}
    </Link>
  );
};
