import LandscapeMovie from "@/components/Fragments/LandscapeMovie";
import MainHeader from "@/components/Fragments/MainHeader";
import NavBar from "@/components/Fragments/NavBar";

const Beranda = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <MainHeader />
      <LandscapeMovie />
    </div>
  );
};

export default Beranda;
