import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useLogin from "./useLogin";
import Button from "../../components/Button";
import Textbox from "../../components/TextBox";
import * as Icon from "../../assets";

const Login = () => {
  const { isVisible, toggleVisibility, register, errors } = useLogin();

  return (
    <div className="flex min-h-screen w-full min-w-[100vw] flex-col items-center justify-center bg-login bg-cover p-4">
      <form className="flex w-[309px] flex-col gap-5 rounded-2xl bg-auth-bg p-10 sm:w-[529px] sm:gap-9.25">
        <div className="flex items-center justify-center gap-0.1 leading-none sm:gap-1">
          <img
            src={Icon.logo}
            alt="Logo"
            className="h-[19.82] w-[24.59px] sm:h-[36.34px] sm:w-[42.56px]"
          />
          <h1 className="text-center font-londrina text-title-mb font-normal sm:text-title">
            CHILL
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.1 leading-none sm:gap-2">
          <h3 className="text-large font-bold sm:text-large-2">Masuk</h3>
          <p className="text-small-mb sm:text-small">Selamat datang kembali!</p>
        </div>
        <div className="flex flex-col gap-9.25">
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
              <p className="text-small text-text-light-secondary">
                Belum punya akun?{" "}
                <strong className="text-sm text-text-light-primary">
                  Daftar
                </strong>
              </p>
              <strong className="text-sm">Lupa kata sandi?</strong>
            </div>
          </Textbox>

          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              label="Masuk"
              className="rounded-3xl bg-other-extra-bg"
            />
            <p className="text-center text-sm font-medium text-text-light-secondary">
              Atau
            </p>
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
