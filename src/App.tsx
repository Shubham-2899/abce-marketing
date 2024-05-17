import "./App.css";
import { Box } from "@mui/material";
import ABCRoutes from "./routes";
import ResponsiveAppBar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Box>
        <ResponsiveAppBar />
        <ABCRoutes />
        <Footer />
      </Box>
    </>
  );
}

export default App;
