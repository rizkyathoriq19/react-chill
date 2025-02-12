import { Form, FormControl, FormItem, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { InputWithLabel, InputWithPassword } from "@/components/Elements/Input";
import { AuthButton } from "@/components/Elements/Button";
import * as Icon from "@/assets";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const FormLogin = () => {
  const form = useForm({
    defaultValues: {
      [name]: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const [isVisible, setIsVisible] = useState(false);

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

        <AuthButton
          buttonName="Masuk"
          iconButtonName="Masuk dengan Google"
          icon={Icon.googleIcon}
        >
          Atau
        </AuthButton>
      </form>
    </Form>
  );
};

export default FormLogin;
