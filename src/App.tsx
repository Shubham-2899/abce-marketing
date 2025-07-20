import "./App.css";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { useLocation } from "react-router-dom";
import ABCRoutes from "./routes";
import ResponsiveAppBar from "./components/Header";
import Footer from "./components/Footer";
import { useMemo, useState } from "react";
import { getTheme } from "./theme";

function App() {
  const location = useLocation();
  const [mode, setMode] = useState<"light" | "dark">(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const theme = useMemo(() => getTheme(mode), [mode]);
  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  // Only hide header/footer on 404 page
  const is404 =
    location.pathname === "/404" ||
    location.pathname === "/not-found" ||
    location.pathname === "/notFound404";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}11 0%, ${theme.palette.secondary.main}11 100%)`
        }}
      >
        {!is404 && <ResponsiveAppBar onToggleTheme={toggleTheme} />}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <ABCRoutes />
        </Box>
        {!is404 && <Footer />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
