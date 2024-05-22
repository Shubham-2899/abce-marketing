import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          textAlign: "center",
          padding: "25px",
          background: "#000",
          color: "#fff",
        }}
      >
        © {new Date().getFullYear()} Monkey Media Services. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
