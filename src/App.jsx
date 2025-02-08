import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
