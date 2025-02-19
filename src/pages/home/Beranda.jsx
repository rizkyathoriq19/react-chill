import ListMovie from "@/components/Fragments/ListMovie";
import MainFooter from "@/components/Fragments/MainFooter";
import MainHeader from "@/components/Fragments/MainHeader";
import Navbar from "@/components/Fragments/Navbar";

const Beranda = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <MainHeader />
      <ListMovie title="Melanjutkan Tonton Film" status="Watching" />
      <ListMovie
        title="Top Rating Film dan Series Hari ini"
        status="Top-Rating"
      />
      <ListMovie title="Film Trending" status="Film-Trending" />
      <ListMovie title="Rilis Baru" status="New-Release" />
      <MainFooter />
    </div>
  );
};

export default Beranda;
