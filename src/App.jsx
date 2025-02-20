import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { routes } from "./pages/routes"; // Import the routes
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <main className="flex items-center justify-center bg-other-pageHeaderBg">
        <div className="max-w-[1440px]">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </main>
    </HelmetProvider>
  );
}

export default App;
