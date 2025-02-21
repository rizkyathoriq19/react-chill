import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { routes } from "./pages/routes"; // Import the routes
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </HelmetProvider>
  );
}

export default App;
