import * as Icon from "@/assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const MainFooter = () => {
  const [showGenre, setShowGenre] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <footer className="w-full border-t border-other-outlineBorder bg-other-pageHeaderBg p-5 sm:px-20 sm:py-16">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between sm:gap-0">
        {/* Logo dan Hak Cipta */}
        <div className="mb-10 flex w-full flex-col items-start justify-center gap-4 sm:mb-0 sm:mr-52 sm:w-fit sm:gap-6">
          <div className="flex items-center gap-[3px] sm:gap-2">
            <img
              src={Icon.logo}
              alt="Logo"
              className="h-[20.65px] w-[23.83px] sm:h-[40px] sm:w-[48px]"
            />
            <h1 className="text-center font-londrina text-2xl sm:text-title">
              CHILL
            </h1>
          </div>
          <p className="text-xs text-light-secondary sm:text-m">
            &copy; 2023 Chill All Rights Reserved.
          </p>
        </div>

        {/* Daftar Genre */}
        <div className="mb-2 w-full sm:mb-0 sm:mr-40 sm:w-fit">
          <Button
            className="flex h-6 w-full justify-between bg-transparent p-0 sm:pointer-events-none sm:mb-4"
            onClick={() => setShowGenre(!showGenre)}
          >
            <div className="text-m-bold text-light-primary">Genre</div>
            <ChevronRight className="block sm:hidden" />
          </Button>
          <ul
            className={`mt-3 grid grid-flow-col grid-rows-7 gap-x-7 gap-y-2 text-nowrap text-m-medium text-light-secondary sm:mt-0 sm:grid-rows-4 sm:gap-y-3 ${showGenre ? "block" : "hidden"} sm:grid`}
          >
            {[
              "Aksi",
              "Anak-anak",
              "Anime",
              "Britania",
              "Drama",
              "Fantasi Ilmiah & Fantasi",
              "Kejahatan",
              "KDrama",
              "Komedi",
              "Petualangan",
              "Perang",
              "Romantis",
              "Sains & Alam",
              "Thriller",
            ].map((genre, index) => (
              <li key={index}>
                <Link>{genre}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Daftar Bantuan */}
        <div className="w-full sm:w-fit">
          <Button
            className="flex h-6 w-full justify-between bg-transparent p-0 sm:pointer-events-none sm:mb-4"
            onClick={() => setShowHelp(!showHelp)}
          >
            <div className="text-m-bold text-light-primary">Bantuan</div>
            <ChevronRight className="block sm:hidden" />
          </Button>
          <ul
            className={`mt-3 flex flex-col gap-2 text-m-medium text-light-secondary sm:mt-0 sm:flex sm:gap-3 ${showHelp ? "block" : "hidden"}`}
          >
            {["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"].map(
              (item, index) => (
                <li key={index}>
                  <Link>{item}</Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
