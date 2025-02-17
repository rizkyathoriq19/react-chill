import LandscapeMovie from "@/components/Fragments/LandscapeMovie";
import MainHeader from "@/components/Fragments/MainHeader";
import NavBar from "@/components/Fragments/NavBar";

const Beranda = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <MainHeader />
      <LandscapeMovie
        title="Melanjutkan Tonton Film"
        basis="basis-1/4"
        height="162px"
        width="302px"
      />
      <LandscapeMovie
        title="Top Rating Film dan Series Hari ini"
        basis="basis-1/5"
        height="365px"
        width="234px"
      />
      <LandscapeMovie
        title="Film Trending"
        basis="basis-1/5"
        height="365px"
        width="234px"
      />
      <LandscapeMovie
        title="Rilis Baru"
        basis="basis-1/5"
        height="365px"
        width="234px"
      />
    </div>
  );
};

export default Beranda;
