import { Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Beranda from "./pages/Beranda";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register/";
import PageLayout from "./components/commons/PageLayout";

function App() {
  return (
    <HelmetProvider>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/home"
            element={
              <PageLayout title="Beranda">
                <Beranda />
              </PageLayout>
            }
          />
          <Route
            path="/auth/register"
            element={
              <PageLayout title="Daftar">
                <Register />
              </PageLayout>
            }
          />
          <Route
            path="/auth/login"
            element={
              <PageLayout title="Masuk">
                <Login />
              </PageLayout>
            }
          />
        </Routes>
      </main>
    </HelmetProvider>
  );
}

export default App;
