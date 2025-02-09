import { useState } from "react";
import { useForm } from "react-hook-form";

const useLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    formState: { errors },
  } = useForm();

  return { isVisible, toggleVisibility, register, errors };
};

export default useLogin;
