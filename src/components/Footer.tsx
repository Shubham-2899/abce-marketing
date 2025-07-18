import { Box, Typography, Grid, Link as MuiLink } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/home" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact-us" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

const socialLinks = [
  { icon: <FacebookIcon />, url: "https://facebook.com", label: "Facebook" },
  { icon: <TwitterIcon />, url: "https://twitter.com", label: "Twitter" },
  { icon: <LinkedInIcon />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <EmailIcon />, url: "mailto:info@raspixmedia.com", label: "Email" },
];

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.background.paper, pt: 4, pb: 2, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{px: 2}}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent={{ xs: "center", md: "flex-start" }} gap={2} flexWrap="wrap">
            {quickLinks.map((link) => (
              <MuiLink
                key={link.label}
                component={Link}
                to={link.to}
                color="inherit"
                sx={{
                  fontWeight: 500,
                  fontSize: 16,
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.primary.main },
                  mx: 1,
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }} gap={2}>
            {socialLinks.map((social) => (
              <MuiLink
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{
                  fontSize: 28,
                  color: theme.palette.primary.main,
                  transition: "color 0.2s",
                  "&:hover": { color: theme.palette.secondary.main },
                  mx: 1,
                }}
                aria-label={social.label}
              >
                {social.icon}
              </MuiLink>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          textAlign: "center",
          padding: "16px 0 0 0",
          color: theme.palette.text.secondary,
        }}
      >
        © {new Date().getFullYear()} RASPIX Media Services. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
