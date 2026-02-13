import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux"; // Import Redux hook
import AppRoutes from "./routes/AppRoutes";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const { mode } = useSelector((state) => state.theme);
  const [isLoading, setIsLoading] = useState(true);

  // Apply theme class to HTML tag on initial load
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  // Show loading screen for initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen on page refresh
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            // Dynamic toast styles
            background: mode === "dark" ? "#334155" : "#333",
            color: "#fff",
          },
        }}
      />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
