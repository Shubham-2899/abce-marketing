import "./App.css";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import ABCRoutes from "./routes";
import ResponsiveAppBar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // Define the list of valid routes
  const validRoutes = ["/", "/home", "/contact-us", "/about-us", "/services"];

  // Check if the current path is a valid route
  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    <>
      <Box>
        {isValidRoute && <ResponsiveAppBar />}
        <ABCRoutes />
        {isValidRoute && <Footer />}
      </Box>
    </>
  );
}

export default App;
