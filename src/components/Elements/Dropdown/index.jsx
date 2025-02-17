import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Links } from "../Link";

export const DropdownItem = ({ children, className, icon, link }) => {
  return (
    <DropdownMenuItem className={cn("focus:bg-transparent", className)}>
      <div className="flex items-center gap-2 text-sm hover:text-primary-default">
        {icon} <Links to={link}>{children}</Links>
      </div>
    </DropdownMenuItem>
  );
};
