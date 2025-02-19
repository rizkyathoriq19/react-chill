import { Form, FormControl, FormItem, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  InputWithLabel,
  InputWithPassDesc,
  InputWithPassword,
} from "@/components/Elements/Input";
import * as Icon from "@/assets";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FormRegister = () => {
  const form = useForm({
    defaultValues: {
      [name]: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const [isVisible, setIsVisible] = useState({
    password: false,
    passwordConfirmation: false,
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
                  type="username"
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
                <InputWithPassword
                  type={isVisible.password ? "text" : "password"}
                  label="Kata Sandi"
                  placeholder="Masukkan kata sandi"
                  className=""
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

        <FormField
          control={form.control}
          name={"passwordConfirmation"}
          rules={{ required: "This field is required" }}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithPassDesc
                  type={isVisible.passwordConfirmation ? "text" : "password"}
                  label="Konfirmasi Kata Sandi"
                  placeholder="Masukkan kata sandi"
                  className=""
                  iconShow={<Eye size={"100%"} />}
                  iconHide={<EyeOff size={"100%"} />}
                  leftDesc="Sudah punya akun?"
                  linkText="Daftar"
                  leftLink="/auth/login"
                  isVisible={isVisible.passwordConfirmation}
                  setIsVisible={() =>
                    setIsVisible((prev) => ({
                      ...prev,
                      passwordConfirmation: !prev.passwordConfirmation,
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
            variant="outlined"
            className="hover:other-outlineBorder h-7 w-full border-other-outlineBorder bg-other-extraBg text-2xs-semibold hover:bg-other-extraBg/80 sm:h-12 sm:text-m"
          >
            Daftar
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
            Daftar dengan Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormRegister;
