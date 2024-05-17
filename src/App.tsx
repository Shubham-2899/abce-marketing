import "./App.css";
import { Box } from "@mui/material";
import ABCRoutes from "./routes";
import ResponsiveAppBar from "./components/Header";

function App() {
  return (
    <>
      <Box>
        <ResponsiveAppBar />
        <ABCRoutes />
      </Box>
    </>
  );
}

export default App;
