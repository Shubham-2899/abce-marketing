import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import mms from "../assets/mms.jpeg";

const pages = ["Home", "About Us", "Contact Us", "Services"];

function ResponsiveAppBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  const handleOpenNavMenu = (_event: React.MouseEvent<HTMLElement>) => {
    setOpenNav(!openNav);
  };

  const handleMenuItemClick = () => {
    setOpenNav(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: "1px solid #ddd",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar disableGutters>
          <div style={{ flexGrow: 1 }}>
            <Link
              style={{ textDecoration: "none", color: "#777" }}
              to={`/home`}
            >
              <img
                src={mms}
                alt="monkey media email marketing"
                style={{
                  objectFit: "cover",
                  maxWidth: "165px",
                  margin: "5px",
                }}
              />
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              border: "1px solid #ddd",
              borderRadius: "5px",
              marginRight: "10px",
              "&:hover": {
                backgroundColor: "#ddd",
              },
              backgroundColor: openNav ? "#ddd" : "transparent",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{
                padding: "5px",
              }}
              disableRipple={true}
            >
              {openNav ? (
                <ClearRoundedIcon sx={{ color: "#888" }} />
              ) : (
                <MenuRoundedIcon sx={{ color: "#888" }} />
              )}
            </IconButton>
          </Box>
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
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(" ", "-")}`}
                sx={{ my: 2, color: "#777", display: "block" }}
                onClick={handleMenuItemClick}
              >
                <Typography variant="h6" sx={{ fontWeight: "500" }}>
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Fading Background and Dropdown */}
      {openNav && (
        <>
          {/* Fading Background */}
          <Box
            onClick={handleMenuItemClick}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9, // Below the dropdown but above other content
            }}
          />
          {/* Dropdown Menu */}
          <Box
            sx={{
              position: "absolute",
              top: "75px",
              right: 0,
              width: "100%",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
              borderTop: "1px solid #ddd",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                onClick={handleMenuItemClick}
                style={{
                  display: "block",
                  padding: "10px 16px",
                  textDecoration: "none",
                  color:
                    location.pathname ===
                    `/${page.toLowerCase().replace(" ", "-")}`
                      ? "#00acef"
                      : "#777",
                  backgroundColor:
                    location.pathname ===
                    `/${page.toLowerCase().replace(" ", "-")}`
                      ? "#f0f8ff"
                      : "transparent",
                  fontWeight:
                    location.pathname ===
                    `/${page.toLowerCase().replace(" ", "-")}`
                      ? "bold"
                      : "normal",
                  borderBottom: "1px solid #ddd",
                }}
                to={`/${page.toLowerCase().replace(" ", "-")}`}
              >
                <Typography variant="body1">{page}</Typography>
              </Link>
            ))}
          </Box>
        </>
      )}
    </>
  );
}

export default ResponsiveAppBar;
