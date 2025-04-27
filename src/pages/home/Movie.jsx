import AllListMovie from "@/components/Fragments/AllListMovie";
import MainFooter from "@/components/Fragments/MainFooter";
import Navbar from "@/components/Fragments/Navbar";

const AllMovie = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AllListMovie />
      <MainFooter />
    </div>
  );
};

export default AllMovie;
