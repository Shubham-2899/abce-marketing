import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import type { SxProps, Theme } from "@mui/material/styles";
import raspix from "../assets/raspix-logo.png";
import { SITE_NAV } from "../site/content";

const FONT = '"Roboto", "Helvetica Neue", Arial, sans-serif';

/** Where "Client Login" goes: the separate client portal app (set in .env). Hidden if not set. */
const PORTAL_URL = (import.meta.env.VITE_APP_PORTAL_URL as string | undefined)?.replace(/\/$/, "");

const navLinkSx = (active: boolean, mobile = false): SxProps<Theme> => ({
  position: "relative",
  color: active ? "#14213d" : "#3d4a63",
  background: "transparent",
  borderRadius: 0,
  fontFamily: FONT,
  px: 1.75,
  py: 1,
  minWidth: 0,
  textTransform: "none",
  transition: "color .2s",
  ...(mobile && { justifyContent: "flex-start", py: 1.4 }),
  "&::after": {
    display: mobile ? "none" : "block",
    content: '""',
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 6,
    height: 1.5,
    background: "#c8553d",
    transform: active ? "scaleX(1)" : "scaleX(0)",
    transition: "transform .3s cubic-bezier(.2,.8,.2,1)",
  },
  "&:hover": { color: "#14213d", background: "transparent" },
  "&:hover::after": { transform: "scaleX(1)" },
});

const loginSx: SxProps<Theme> = {
  color: "#14213d",
  fontFamily: FONT,
  fontWeight: 600,
  fontSize: 15,
  textTransform: "none",
  px: 2.25,
  py: 0.8,
  borderRadius: 0,
  border: "1px solid #14213d",
  "&:hover": { background: "#14213d", color: "#f5f1ea" },
};

/** Public website header. Content is aligned to the same 1200px column as the pages (.wrap). */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = (to: string) => pathname === to || (to === "/" && pathname === "/home");
  const close = () => setOpen(false);

  const login = PORTAL_URL ? (
    <Button component="a" href={`${PORTAL_URL}/signin`} startIcon={<LoginRoundedIcon />} sx={loginSx}>
      Client Login
    </Button>
  ) : null;

  return (
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 9900 }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ background: "#f5f1ea", color: "#14213d", fontFamily: FONT }}>
        <Toolbar disableGutters sx={{ minHeight: 76, width: "100%", maxWidth: 1200, mx: "auto", px: "28px", boxSizing: "border-box" }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Link to="/" onClick={close} style={{ display: "flex", alignItems: "center" }}>
              {/* multiply blends the logo's white background into the paper */}
              <img src={raspix} alt="RASPIX Media" style={{ maxWidth: 118, display: "block", mixBlendMode: "multiply" }} />
            </Link>
          </Box>

          {/* mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Open navigation"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              sx={{ color: "#14213d", border: "1px solid #14213d", borderRadius: 0, p: 0.75 }}
            >
              {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>
            {open && (
              <Box
                component="nav"
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 76,
                  display: "flex",
                  flexDirection: "column",
                  p: 1.5,
                  gap: 0.5,
                  background: "#f5f1ea",
                  borderBottom: "1px solid #14213d",
                  animation: "hero-in .35s cubic-bezier(.2,.8,.2,1) both",
                }}
              >
                {SITE_NAV.map((item) => (
                  <Button key={item.to} component={Link} to={item.to} onClick={close} sx={navLinkSx(isActive(item.to), true)}>
                    <Typography sx={{ fontWeight: 600, fontSize: 16, fontFamily: FONT }}>{item.label}</Typography>
                  </Button>
                ))}
                {login && <Box sx={{ pt: 1, px: 1 }}>{login}</Box>}
              </Box>
            )}
          </Box>

          {/* desktop — with no button at the end, offset the last link's padding so it meets the page edge */}
          <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5, mr: login ? 0 : -1.75 }}>
            {SITE_NAV.map((item) => (
              <Button key={item.to} component={Link} to={item.to} sx={navLinkSx(isActive(item.to))}>
                <Typography sx={{ fontWeight: 600, fontSize: 15, letterSpacing: 0.1, fontFamily: FONT }}>{item.label}</Typography>
              </Button>
            ))}
            {login && <Box sx={{ ml: 1.5 }}>{login}</Box>}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
