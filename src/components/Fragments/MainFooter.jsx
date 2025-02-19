import * as Icon from "@/assets";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <footer className="w-full border-t border-other-outlineBorder bg-other-pageHeaderBg px-6 py-10 sm:px-20 sm:py-16">
      <div className="flex w-full justify-between">
        {/* Logo dan Hak Cipta */}
        <div className="mr-52 flex flex-col items-start justify-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src={Icon.logo}
              alt="Logo"
              className="h-[36px] w-[42px] sm:h-[40px] sm:w-[48px]"
            />
            <h1 className="text-center font-londrina text-xl sm:text-title">
              CHILL
            </h1>
          </div>
          <p className="text-m text-light-secondary">
            &copy; 2023 Chill All Rights Reserved.
          </p>
        </div>

        {/* Daftar Genre */}
        <div className="mr-40">
          <p className="mb-4 text-m-bold text-light-primary">Genre</p>
          <ul className="grid grid-flow-col grid-rows-4 gap-x-7 gap-y-3 text-nowrap text-m-medium text-light-secondary">
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
        <div>
          <p className="mb-4 text-m-bold text-light-primary">Bantuan</p>
          <ul className="flex flex-col gap-3 text-m-medium text-light-secondary">
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
