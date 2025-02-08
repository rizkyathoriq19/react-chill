import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useLogin from "./useLogin";
import Button from "../../components/Button";
import Textbox from "../../components/TextBox";
import * as Icon from "../../assets";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const { isVisible, toggleVisibility } = useLogin();

  return (
    <div className="flex min-h-screen w-full min-w-[100vw] flex-col items-center justify-center bg-login bg-cover p-4">
      <form className="flex w-[529px] flex-col gap-[37px] rounded-2xl bg-[#181A1C] p-10 opacity-[84%]">
        <div className="flex items-center justify-center gap-1">
          <img src={Icon.logo} alt="Logo" className="h-11 w-[50px]" />
          <h1 className="text-center font-londrina text-title font-normal">
            CHILL
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-[32px] font-bold">Masuk</h3>
          <p>Selamat datang kembali!</p>
        </div>
        <div className="flex flex-col gap-[37px]">
          <Textbox
            placeholder="Masukkan username"
            type="text"
            name="username"
            label="Username"
            className="w-full rounded-full"
            register={register("username", {
              required: "Username is required",
            })}
            error={errors.username?.message}
          />

          <Textbox
            placeholder="Masukkan kata sandi"
            type={isVisible ? "text" : "password"}
            name="password"
            label="Kata Sandi"
            className="w-full rounded-full"
            register={register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
            endContent={
              <button
                type="button"
                className="focus:outline-none"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FaEye className="pointer-events-none" />
                ) : (
                  <FaEyeSlash className="pointer-events-none" />
                )}
              </button>
            }
          >
            <div className="mt-[6px] flex justify-between">
              <p>
                Belum punya akun?{" "}
                <strong className="text-[14px]">Daftar</strong>
              </p>
              <strong className="text-[14px]">Lupa kata sandi?</strong>
            </div>
          </Textbox>

          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              label="Masuk"
              className="rounded-3xl bg-other-extra-bg"
            />
            <p className="text-center font-medium text-[14]">Atau</p>
            <Button
              type="button"
              label="Masuk dengan Google"
              className="rounded-3xl bg-transparent"
            >
              <img
                src={Icon.googleIcon}
                alt="Google Icon"
                className="mr-5 h-[18px] w-[18px]"
              />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
