/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { InputWithEdit } from "../Elements/Input";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { FileUp } from "lucide-react";
import * as Icon from "@/assets";
import { updateUser } from "@/api/movieApi";
import { getUser } from "@/api/movieApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  updateUser as updateUserRedux,
} from "@/store/redux/userReducer";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isEditable, setIsEditable] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [subcribe, setSubcribe] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          alert("User ID tidak ditemukan!");
          return;
        }
        const fetchedUser = await getUser(userId);
        dispatch(
          setUser({ user: fetchedUser, token: localStorage.getItem("token") }),
        );
        setUser(fetchedUser);
        setUsername(fetchedUser.username);
        setPassword(fetchedUser.password);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch user data");
      }
    };
    fetchUserData();
  }, [dispatch]);

  const handleSave = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User ID tidak ditemukan!");
        return;
      }
      await updateUser(userId, {
        username: username,
        password: password,
      });
      alert("Update profile successfully!");

      dispatch(updateUserRedux({ username, password }));
      setIsEditable(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleSubcribeClick = () => {
    setSubcribe(!subcribe);
  };

  return (
    <div className="flex w-full flex-col items-start bg-other-pageHeaderBg p-5 sm:px-20 sm:py-10">
      <div className="flex w-full flex-wrap-reverse sm:gap-20">
        <div className="flex w-[642px] flex-col gap-6 sm:gap-8">
          <h1 className="mt-5 text-heading-s sm:mt-0 sm:text-heading-l">
            Profil Saya
          </h1>
          <div className="flex h-[80px] w-[213px] gap-6 sm:h-[140px] sm:w-[287px]">
            <img
              src={Icon.avatar}
              alt="user profile"
              className="h-20 w-20 rounded-full sm:h-[140px] sm:w-[140px]"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <Button
                variant="outline"
                className="h-9 w-[91px] !border-primary !bg-transparent text-m-medium !text-primary hover:!bg-transparent sm:h-10 sm:w-28"
              >
                Ubah Foto
              </Button>
              <div className="flex items-center gap-1">
                <FileUp className="!h-4 !w-4 sm:!h-6 sm:!w-6" />
                <p className="text-xs sm:text-s-medium">Maximal 2MB</p>
              </div>
            </div>
          </div>
          <InputWithEdit
            label="Nama Pengguna"
            defaultValue={username}
            disabled={!isEditable}
            onEditClick={handleEditClick}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputWithEdit
            label="Email"
            defaultValue={username ? `${username}@gmail.com` : ""}
            showEditIcon={false}
          />
          <InputWithEdit
            label="Password"
            type="password"
            defaultValue={password}
            disabled={!isEditable}
            onEditClick={handleEditClick}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="ml-auto items-start">
          {subcribe ? (
            <Card className="h-[214px] w-[320px] border-none bg-gradient-to-l from-[#192DB7] to-[#5370D4] text-light-primary sm:mt-[68px] sm:h-[210px] sm:w-[558px]">
              <CardContent className="p-6">
                <div className="flex flex-col items-start gap-5">
                  <Button className="pointer-events-none h-8 w-20 !border-none bg-light-secondary !text-m-medium text-primary-300 hover:!bg-light-secondary sm:w-20">
                    Aktif
                  </Button>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-heading-xs sm:text-heading-m">
                      Akun Premium Individual✨
                    </h4>
                    <p className="text-s sm:text-l">
                      Saat ini kamu sedang menggunakan akses akun premium
                    </p>
                  </div>
                  <p className="text-s-medium text-light-secondary sm:text-m-medium">
                    Berlaku hingga 31 Desember 2023
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-[191px] w-[320px] border-none bg-other-extraBg text-light-primary sm:h-[193px] sm:w-[558px]">
              <CardContent className="p-6">
                <div className="flex flex-col items-end gap-5">
                  <div className="flex gap-5">
                    <img
                      src="/images/icon/warning.png"
                      alt="warning icon"
                      className="h-[78px] w-[78px]"
                    />
                    <div className="flex flex-col gap-3">
                      <div>
                        {/* Untuk mobile */}
                        <h6 className="text-heading-xs sm:hidden">
                          Berlangganan
                        </h6>

                        {/* Untuk desktop */}
                        <h4 className="hidden text-heading-xs sm:block sm:text-heading-m">
                          Saat ini anda belum berlangganan
                        </h4>
                      </div>
                      <p className="text-s sm:text-l">
                        Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series
                        Kesukaan Kamu!
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="h-7 w-[154px] !border-none bg-other-bodyBg text-xs hover:!bg-other-bodyBg sm:h-9 sm:w-[189px] sm:text-m-medium"
                    onClick={handleSubcribeClick}
                  >
                    Mulai Berlangganan
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <div
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSave();
          }
        }}
      >
        <Button
          variant="default"
          className="hidden !bg-primary-400 text-m-medium !text-light-primary hover:!bg-primary-400 sm:mt-8 sm:inline-block"
          onClick={handleSave}
        >
          Simpan
        </Button>
      </div>
    </div>
  );
};

export default ProfileMenu;
