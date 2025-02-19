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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, UserRound, Star, LogOut } from "lucide-react";
import * as Icon from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { name: "Series", to: "/home" },
  { name: "Film", to: "/home" },
  { name: "Daftar Saya", to: "/home" },
];

const dropdownItems = [
  {
    icon: <UserRound size={18} fill="white" />,
    label: "Profil Saya",
    link: "",
  },
  { icon: <Star size={18} fill="white" />, label: "Ubah Premium", link: "" },
  { icon: <LogOut size={18} />, label: "Keluar", link: "/auth/login" },
];

const Navbar = () => {
  return (
    <nav className="flex h-14 w-full items-center bg-other-pageHeaderBg px-5 py-2 sm:h-24 sm:px-20 sm:py-6">
      {/* Logo and Title */}
      <div className="mr-3 flex items-center justify-center gap-1 sm:mr-20">
        <img
          src={Icon.logo}
          alt="Logo"
          className="h-[14.86px] w-[17.02px] self-center sm:h-[21.47px] sm:w-[25.15px]"
        />
        <h1 className="hidden text-center font-londrina text-title-mb sm:block sm:text-3xl">
          CHILL
        </h1>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-3 sm:gap-20">
          {navigationLinks.map(({ name, to }) => (
            <NavigationMenuItem key={name}>
              <NavigationMenuLink asChild>
                <Link
                  to={to}
                  className="flex items-center text-2xs-medium sm:text-l-medium"
                >
                  {name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="ml-auto">
            <Button
              variant="default"
              size="icon"
              className="bg-transparen flex w-full items-center p-0 hover:bg-transparent focus-visible:ring-0"
            >
              <Avatar className="h-5 w-5 sm:h-10 sm:w-10">
                <AvatarImage src={Icon.avatar} alt="avatar icon" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ChevronDown
                strokeWidth={3}
                className="!h-4 !w-4 sm:!h-7 sm:!w-7"
              />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 border-none bg-other-pageHeaderBg text-s-semibold text-light-primary">
          <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {dropdownItems.map(({ icon, label, link }) => (
              <DropdownMenuItem key={label} className="focus:bg-transparent">
                <div className="flex items-center gap-2 text-sm hover:text-primary">
                  {icon}{" "}
                  <Link to={link} className="text-2xs-medium sm:text-s-medium">
                    {label}
                  </Link>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
