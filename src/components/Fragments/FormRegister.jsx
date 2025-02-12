import { Form, FormControl, FormItem, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  InputWithLabel,
  InputWithPassDesc,
  InputWithPassword,
} from "@/components/Elements/Input";
import { AuthButton } from "@/components/Elements/Button";
import * as Icon from "@/assets";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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
                  iconHide={<EyeOff size={"size100%"} />}
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
                  iconHide={<EyeOff size={"size100%"} />}
                  leftDesc="Sudah punya akun?"
                  link="Daftar"
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

        <AuthButton
          buttonName="Daftar"
          iconButtonName="Daftar dengan Google"
          icon={Icon.googleIcon}
        >
          Atau
        </AuthButton>
      </form>
    </Form>
  );
};

export default FormRegister;
