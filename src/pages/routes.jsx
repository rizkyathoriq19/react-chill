import Beranda from "./home/Beranda";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Navigate } from "react-router-dom";
import PageLayout from "@/components/Layouts/PageLayout";
import NotFound from "./NotFound";
import Profile from "./profile/Profile";
import AllMovie from "./home/Movie";

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
    path: "/home/movies",
    element: (
      <PageLayout title="Daftar Saya">
        <AllMovie />
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
  {
    path: "/profile/:userId",
    element: (
      <PageLayout title="Profile">
        <Profile />
      </PageLayout>
    ),
  },
  {
    path: "*",
    element: (
      <PageLayout title="404">
        <NotFound />
      </PageLayout>
    ),
  },
];
