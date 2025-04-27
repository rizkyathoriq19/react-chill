import MainFooter from "@/components/Fragments/MainFooter";
import MyList from "@/components/Fragments/MyList";
import Navbar from "@/components/Fragments/Navbar";
import ProfileMenu from "@/components/Fragments/ProfileMenu";

const Profile = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ProfileMenu />
      <MyList status="New-Release" />
      <MainFooter />
    </div>
  );
};

export default Profile;
