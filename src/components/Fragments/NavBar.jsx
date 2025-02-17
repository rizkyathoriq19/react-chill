import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, UserRound, Star, LogOut } from "lucide-react";
import * as Icon from "@/assets";

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
            <NavigationMenuLink>
              <Link to="/home" className="text-lg">
                Film
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link to="/home" className="text-lg">
                Daftar Saya
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ml-auto flex gap-2">
          <Button
            variant="default"
            className="bg-transparent hover:bg-transparent focus-visible:ring-0"
          >
            <Avatar>
              <AvatarImage src={Icon.avatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown strokeWidth={4} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 border-none bg-other-page-header-bg text-sm font-medium text-text-light-primary">
          <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="focus:bg-transparent">
              <div className="flex items-center gap-2 text-sm hover:text-primary-default">
                {" "}
                <UserRound size={18} /> Profil Saya
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-transparent">
              <div className="flex items-center gap-2 text-sm hover:text-primary-default">
                <Star size={18} /> Ubah Premium
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-transparent">
              <div className="flex items-center gap-2 text-sm hover:text-primary-default">
                <LogOut size={18} /> Keluar
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default NavBar;
