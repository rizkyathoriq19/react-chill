import { useState } from "react";

const useLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  console.log(isVisible);

  return { isVisible, toggleVisibility };
};

export default useLogin;
