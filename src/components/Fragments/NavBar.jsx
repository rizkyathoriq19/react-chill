import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, UserRound, Star, LogOut } from "lucide-react";
import * as Icon from "@/assets";
import { DropdownItem } from "../Elements/Dropdown";
import { ButtonWithAvatar } from "../Elements/Button";

const NavBar = () => {
  return (
    <nav className="flex h-20 w-full items-center bg-other-page-header-bg px-20 py-6">
      <div className="mr-20 flex items-center justify-center gap-1">
        <img
          src={Icon.logo}
          alt="Logo"
          className="h-[19.82px] w-[24.59px] self-center sm:h-[21.47px] sm:w-[25.15px]"
        />
        <h1 className="text-center font-londrina text-title-mb font-normal sm:text-3xl">
          CHILL
        </h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-20">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/home" className="text-lg">
                Series
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/home" className="text-lg">
                Film
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/home" className="text-lg">
                Daftar Saya
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="ml-auto">
            <ButtonWithAvatar
              avatar={Icon.avatar}
              icon={<ChevronDown strokeWidth={4} />}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 border-none bg-other-page-header-bg text-sm font-medium text-text-light-primary">
          <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownItem icon={<UserRound size={18} />} link="">
              Profil Saya
            </DropdownItem>
            <DropdownItem icon={<Star size={18} />} link="">
              Ubah Premium
            </DropdownItem>
            <DropdownItem icon={<LogOut size={18} />} link="/auth/login">
              Keluar
            </DropdownItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default NavBar;
