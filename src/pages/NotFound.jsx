import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-other-pageHeaderBg text-center text-light-primary">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Halaman tidak ditemukan</p>
      <Button asChild className="mt-2 bg-primary-200 hover:bg-primary-200/80">
        <Link to="/auth/login">Kembali ke Halaman Masuk</Link>
      </Button>
    </div>
  );
};

export default NotFound;
