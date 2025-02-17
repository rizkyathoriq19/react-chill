import { HoverCards } from "@/components/Fragments/HoverCard";
import ListMovie from "@/components/Fragments/ListMovie";
import MainHeader from "@/components/Fragments/MainHeader";
import NavBar from "@/components/Fragments/NavBar";

const Beranda = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <MainHeader />
      <ListMovie
        title="Melanjutkan Tonton Film"
        basis="basis-1/4"
        height="162px"
        width="302px"
      />
      <ListMovie
        title="Top Rating Film dan Series Hari ini"
        basis="basis-1/5"
        height="365px"
        width="234px"
      />
      <ListMovie
        title="Film Trending"
        basis="basis-1/5"
        height="365px"
        width="234px"
      />
      <ListMovie
        title="Rilis Baru"
        basis="basis-1/5"
        height="365px"
        width="234px"
      />
      <HoverCards />
    </div>
  );
};

export default Beranda;
