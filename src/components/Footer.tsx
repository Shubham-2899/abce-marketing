import {
  Box,
  Typography,
  Grid,
  Link as MuiLink,
  TextField,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
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
  { icon: <LinkedInIcon />, url: "https://www.linkedin.com/company/raspix-media/", label: "LinkedIn" },
  { icon: <EmailIcon />, url: "mailto:admin@raspixmedia.com", label: "Email" },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.background.paper,
        pt: 6,
        pb: 3,
        mt: 3,
        borderTop: `.8rem solid ${theme.palette.divider}`,
      }}
    >
      <Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            RASPIX Media
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We help companies deliver critical messages, engage customers, and
            grow their audience with intelligent email solutions and
            data-driven insights.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {quickLinks.map((link) => (
              <MuiLink
                key={link.label}
                component={Link}
                to={link.to}
                color="inherit"
                sx={{
                  fontSize: 14,
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: admin@raspixmedia.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: --
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: Pune, Maharashtra, India
          </Typography>
          <Box mt={2} display="flex" gap={1}>
            {socialLinks.map((social) => (
              <MuiLink
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: 24,
                  color: theme.palette.primary.main,
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                {social.icon}
              </MuiLink>
            ))}
          </Box>
        </Grid>

        {/* Newsletter Signup */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Join our newsletter for the latest updates.
          </Typography>
          <Box display="flex" gap={1}>
            <TextField
              size="small"
              placeholder="Your Email"
              variant="outlined"
              sx={{ flex: 1 }}
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box mt={4}>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ fontSize: { xs: "13px", sm: "15px" } }}
        >
          © {new Date().getFullYear()} RASPIX Media Services. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
