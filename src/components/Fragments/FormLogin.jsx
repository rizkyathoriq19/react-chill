import { Form, FormControl, FormItem, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { InputWithLabel, InputWithPassDesc } from "@/components/Elements/Input";
import * as Icon from "@/assets";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { getAllUsers } from "@/api/movieApi";
import { useDispatch } from "react-redux";
import { setUser, setLoading, setError } from "@/store/redux/userReducer";

const FormLogin = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { username, password } = data;

    try {
      dispatch(setLoading(true));

      const users = await getAllUsers();
      const user = users.find(
        (u) => u.username === username && u.password === password,
      );

      if (user) {
        const token = btoa(username);

        dispatch(setUser({ user, token }));

        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.id);
        alert("Login successfully!");
        window.location.href = "/home";
      } else {
        alert("Username atau password salah!");
      }

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError("Something went wrong. Please try again."));

      console.log(error);
      alert("Something went wrong. Please try again.");
    }

    // const users = JSON.parse(localStorage.getItem("users")) || [];
    // const user = users.find(
    //   (u) => u.username === username && u.password === password,
    // );

    // if (user) {
    //   const token = btoa(username);
    //   localStorage.setItem("token", token);
    //   alert("Masuk berhasil!");
    //   window.location.href = "/home";
    // } else {
    //   alert("Username atau password salah!");
    // }
  };

  const [isVisible, setIsVisible] = useState({
    password: false,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 sm:gap-9"
      >
        <FormField
          control={form.control}
          name={"username"}
          rules={{ required: "This field is required" }}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithLabel
                  type="text"
                  label="Username"
                  placeholder="Masukkan username"
                  className=""
                  {...field}
                />
              </FormControl>
              {fieldState.error && (
                <p className="text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"password"}
          rules={{ required: "This field is required" }}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithPassDesc
                  type={isVisible.password ? "text" : "password"}
                  label="Kata Sandi"
                  placeholder="Masukkan kata sandi"
                  className=""
                  leftDesc="Belum punya akun?"
                  rightDesc="Lupa kata sandi?"
                  linkText="Daftar"
                  leftLink="/auth/register"
                  rightLink="/forgot-password"
                  iconShow={<Eye size={"100%"} />}
                  iconHide={<EyeOff size={"100%"} />}
                  isVisible={isVisible.password}
                  setIsVisible={() =>
                    setIsVisible((prev) => ({
                      ...prev,
                      password: !prev.password,
                    }))
                  }
                  {...field}
                />
              </FormControl>
              {fieldState.error && (
                <p className="text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-1 sm:gap-2">
          <Button
            type="submit"
            variant="outlined"
            className="hover:other-outlineBorder h-7 w-full border-other-outlineBorder bg-other-extraBg text-2xs-semibold hover:bg-other-extraBg/80 sm:h-12 sm:text-m"
          >
            Masuk
          </Button>
          <p className="text-center text-2xs-medium text-light-disabled sm:text-s-medium">
            Atau
          </p>
          <Button
            variant="outlined"
            className="hover:text-other-extra-text hover:other-outlineBorder h-7 w-full rounded-full border-other-outlineBorder bg-transparent text-2xs-semibold hover:bg-auth-bg/80 sm:h-12 sm:text-base"
          >
            <img
              src={Icon.googleIcon}
              alt="googleIcon"
              className="h-2 w-2 sm:h-4 sm:w-4"
            />
            Masuk dengan Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormLogin;
