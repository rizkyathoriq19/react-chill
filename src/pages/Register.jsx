import * as Icon from "@/assets";
import FormRegister from "@/components/Fragments/FormRegister";
import AuthLayout from "@/components/Layouts/AuthLayout";

const Register = () => {
  return (
    <div className="bg-register flex min-h-screen w-full min-w-[100vw] flex-col items-center justify-center bg-cover p-4">
      <AuthLayout
        titleLogo={Icon.logo}
        titleName="CHILL"
        titleDesc="Daftar"
        titleSubDesc="Selamat datang!"
      >
        <FormRegister />
      </AuthLayout>
    </div>
  );
};

export default Register;
