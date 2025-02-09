import { Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageLayout from "./components/commons/PageLayout";

function App() {
  return (
    <HelmetProvider>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/beranda"
            element={
              <PageLayout title="Beranda">
                <Beranda />
              </PageLayout>
            }
          />
          <Route
            path="/register"
            element={
              <PageLayout title="Daftar">
                <Register />
              </PageLayout>
            }
          />
          <Route
            path="/login"
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
