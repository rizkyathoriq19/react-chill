import { VolumeOff, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainHeader = () => {
  return (
    <div className="relative flex h-[225px] w-full flex-col justify-end bg-main-bg bg-cover bg-center bg-no-repeat px-5 pb-10 pt-16 sm:h-[587px] sm:px-20 sm:pb-20 sm:pt-64">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-linear-from via-linear-via to-linear-to opacity-85" />
      <div className="z-10 flex flex-col gap-3 text-light-primary sm:gap-10">
        <div>
          <h1 className="text-heading-m sm:text-heading-2xl">
            Duty After School
          </h1>
          <p className="mt-5 line-clamp-2 max-w-80 text-ellipsis text-xs-medium sm:line-clamp-none sm:max-w-2xl sm:text-l-medium">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="shadow"
            className="h-6 w-14 text-xs-bold sm:h-11 sm:w-24 sm:text-m-bold"
          >
            Mulai
          </Button>
          <Button className="h-6 w-32 bg-other-paperBg text-xs-bold hover:bg-other-paperBg/85 sm:h-11 sm:w-44 sm:text-m-bold">
            <Info strokeWidth={3} className="!h-3 !w-3 sm:!h-6 sm:!w-6" />{" "}
            Selengkapnya
          </Button>
          <Button
            variant="outlined"
            className="pointer-events-none h-6 w-8 border-light-secondary bg-transparent p-1 text-xs text-light-secondary sm:h-11 sm:w-14 sm:text-l"
          >
            18+
          </Button>
          <Button
            variant="outlined"
            className="ml-auto h-6 w-6 border-light-secondary bg-transparent p-1 hover:bg-transparent sm:h-11 sm:w-11 sm:p-2"
          >
            <VolumeOff
              className="h-3 w-3 leading-none text-light-secondary sm:!h-6 sm:!w-6"
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
