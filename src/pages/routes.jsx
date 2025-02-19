import Beranda from "./home/Beranda";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Navigate } from "react-router-dom";
import PageLayout from "@/components/Layouts/PageLayout";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/home",
    element: (
      <PageLayout title="Beranda">
        <Beranda />
      </PageLayout>
    ),
  },
  {
    path: "/auth/login",
    element: (
      <PageLayout title="Masuk">
        <Login />
      </PageLayout>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <PageLayout title="Daftar">
        <Register />
      </PageLayout>
    ),
  },
];
