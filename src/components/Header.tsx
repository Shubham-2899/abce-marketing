import * as React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import mms from "../assets/raslogo.png";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const pages = [
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Portfolio", path: "/portfolio" },
];

interface ResponsiveAppBarProps {
  onToggleTheme: () => void;
}

function ResponsiveAppBar({ onToggleTheme }: ResponsiveAppBarProps) {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleOpenNavMenu = () => {
    setOpenNav(!openNav);
  };

  const handleMenuItemClick = () => {
    setOpenNav(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Toolbar disableGutters>
          <div style={{ flexGrow: 1 }}>
            <Link
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              to={`/home`}
            >
              <img
                src={mms}
                alt="raspix media email marketing"
                style={{
                  objectFit: "cover",
                  maxWidth: "165px",
                  margin: ".2rem 0 .2rem 1rem",
                }}
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "end",
                gap: "25px",
                paddingRight: "30px",
              },
              alignItems: "center",
            }}
          >
            {pages.map((page) => {
              const active = isActive(page.path);
              return (
                <Box
                  key={page.name}
                  sx={{ position: "relative", display: "inline-block" }}
                >
                  <NavLink
                    to={page.path}
                    style={{
                      textDecoration: "none",
                      color: active
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                      fontWeight: active ? 700 : 500,
                      fontSize: "1.1rem",
                      padding: "8px 0",
                      transition: "color 0.2s",
                    }}
                  >
                    {page.name}
                  </NavLink>
                  {/* Animated underline for active link */}
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: 3,
                          borderRadius: 2,
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>
                </Box>
              );
            })}
            {/* Theme Toggle Button */}
            <IconButton sx={{ ml: 1 }} onClick={onToggleTheme} color="inherit">
              {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          {/* Mobile Menu Toggle */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
            onClick={onToggleTheme}
            color="inherit"
          >
            {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: "5px",
              marginRight: "10px",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
              backgroundColor: openNav
                ? theme.palette.action.hover
                : "transparent",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ padding: "5px" }}
              disableRipple={true}
            >
              {openNav ? (
                <ClearRoundedIcon
                  sx={{ color: theme.palette.text.secondary }}
                />
              ) : (
                <MenuRoundedIcon sx={{ color: theme.palette.text.secondary }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile Dropdown Menu */}
      {openNav && (
        <Box
          onClick={handleMenuItemClick}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9,
          }}
        />
      )}
      {openNav && (
        <Box
          sx={{
            position: "fixed",
            top: "75px",
            right: 0,
            width: "100%",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          {pages.map((page) => {
            const active = isActive(page.path);
            return (
              <NavLink
                key={page.name}
                onClick={handleMenuItemClick}
                style={{
                  display: "block",
                  padding: "16px 24px",
                  textDecoration: "none",
                  color: active
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                  backgroundColor: active
                    ? theme.palette.action.selected
                    : "transparent",
                  fontWeight: active ? 700 : 500,
                  fontSize: "1.1rem",
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  transition: "background 0.2s, color 0.2s",
                }}
                to={page.path}
              >
                {page.name}
              </NavLink>
            );
          })}
        </Box>
      )}
    </>
  );
}

export default ResponsiveAppBar;
