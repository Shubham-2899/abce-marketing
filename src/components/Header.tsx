import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import abclogo from "../assets/abce-logo.png";

const pages = ["Home", "About Us", "Contact Us", "Services"];

function ResponsiveAppBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  const handleOpenNavMenu = (_event: React.MouseEvent<HTMLElement>) => {
    setOpenNav(!openNav);
  };

  const handleMenuItemClick = () => {
    setOpenNav(false); // Close the navigation menu after navigation
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #ddd", backgroundColor: "#fff" }}
    >
      <Toolbar disableGutters>
        <div style={{ flexGrow: 1, paddingLeft: "16px" }}>
          <img
            src={abclogo}
            alt="abc email marketing"
            style={{ objectFit: "cover", width: "auto", height: "3vh" }}
          />
        </div>
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
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{
              padding: "5px",
            }}
            disableRipple={true}
          >
            <MenuRoundedIcon sx={{ color: "#888" }} />
          </IconButton>
          {openNav && (
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                top: "58px",
                left: 0,
                position: "absolute",
                color: "#777",
                backgroundColor: "#fff",
                boxShadow: "0 1px 0 #888",
                zIndex: 9,
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleMenuItemClick}
                  sx={{
                    backgroundColor:
                      location.pathname ===
                      `/${page.toLowerCase().replace(" ", "-")}`
                        ? "#00acef"
                        : "transparent",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#777" }}
                    to={`/${page.toLowerCase().replace(" ", "-")}`}
                  >
                    <Typography variant="h6" textAlign="center">
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </nav>
          )}
        </Box>
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
  );
}

export default ResponsiveAppBar;
