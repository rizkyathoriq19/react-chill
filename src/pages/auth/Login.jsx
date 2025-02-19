import * as Icon from "@/assets";
import FormLogin from "@/components/Fragments/FormLogin";
import AuthLayout from "@/components/Layouts/AuthLayout";

const Login = () => {
  return (
    <div className="flex min-h-screen w-full min-w-[100vw] flex-col items-center justify-center bg-login bg-cover p-4">
      <AuthLayout
        titleLogo={Icon.logo}
        titleDesc="Masuk"
        titleSubDesc="Selamat datang kembali!"
      >
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default Login;
