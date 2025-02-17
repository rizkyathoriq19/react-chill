import { ButtonAction, ButtonPrimary } from "../Elements/Button";
import { VolumeOff, Info } from "lucide-react";
import { Circle } from "../Elements/Circle";

const MainHeader = () => {
  return (
    <div className="relative flex h-[587px] w-full flex-col justify-end bg-main-bg bg-cover bg-center px-20 pb-20 pt-64">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-linear-from via-linear-via to-linear-to" />
      <div className="z-10 flex flex-col gap-10 text-text-light-primary">
        <div>
          <h1 className="text-5xl font-bold">Duty After School</h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-6">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <ButtonPrimary className="w-24">Mulai</ButtonPrimary>
          <ButtonPrimary className="w-44 bg-other-paper-bg hover:bg-other-extra-bg">
            <Info strokeWidth={3} /> Selengkapnya
          </ButtonPrimary>
          <Circle size={40} className="text-text-light-secondary">
            18+
          </Circle>
          <ButtonAction className="ml-auto h-10 w-10 border-text-light-secondary bg-transparent">
            <VolumeOff
              className="leading-none text-text-light-secondary"
              size={40}
              strokeWidth={2}
            />
          </ButtonAction>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
