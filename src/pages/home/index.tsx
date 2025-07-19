import {
  Box,
  Typography,
  Button,
  Card,
  Grid,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WaveBackground from "../../components/WaveBackground";

const features = [
  {
    icon: <StarIcon color="primary" fontSize="large" />,
    title: "Deliverability",
    description: "Industry-leading inbox placement for all your emails.",
  },
  {
    icon: <SecurityIcon color="secondary" fontSize="large" />,
    title: "Security",
    description:
      "Your data and campaigns are protected with enterprise-grade security.",
  },
  {
    icon: <TrendingUpIcon color="primary" fontSize="large" />,
    title: "Growth",
    description: "Tools and analytics to help you grow your audience and ROI.",
  },
  {
    icon: <SupportAgentIcon color="secondary" fontSize="large" />,
    title: "Support",
    description: "Our team is here for you 24/7, every step of the way.",
  },
];

const socialLinks = [
  { icon: <FacebookIcon />, url: "https://facebook.com", label: "Facebook" },
  { icon: <TwitterIcon />, url: "https://twitter.com", label: "Twitter" },
  { icon: <LinkedInIcon />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <EmailIcon />, url: "mailto:info@raspixmedia.com", label: "Email" },
];

const Home = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  console.log("theme.palette.mode", isDark);

  return (
    <Box sx={{ position: "relative" }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: 350, md: 420 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          // overflow: "scoll",
          // zIndex : 1,
          py: 8,
          px: 2,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}11 0%, ${theme.palette.secondary.main}11 100%)`,
        }}
      >
        {isDesktop && <WaveBackground isDark={isDark} />}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ zIndex: 1, width: "100vw", minHeight: "60vh" }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color={theme.palette.text.primary}
            mb={2}
          >
            RASPIX Media Email Marketing
          </Typography>
          <Typography variant="h5" color={theme.palette.text.secondary} mb={4}>
            Your best bet to get emails delivered to Inbox. Grow your business
            with reliable, secure, and effective email marketing.
          </Typography>
          <Button
            component={Link}
            to="/contact-us"
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontWeight: 600, px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Get Started
          </Button>
        </motion.div>
      </Box>

      {/* Why choose us */}
      <Box
        sx={{
          px: { xs: 3, md: 10 },
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(90deg, ${theme.palette.primary.main}11 0%, ${theme.palette.secondary.main}11 100%)`,
          pb: 10,
          pt: { xs: 6, md: 10 },
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* Left Side */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="subtitle2"
              color="primary"
              fontSize={28}
              fontWeight={700}
              mb={2}
            >
              Why Choose Raspix Media?
            </Typography>

            <Typography
              variant="h4"
              fontWeight={800}
              mb={2}
              sx={{ lineHeight: 1.3 }}
            >
              Built for Businesses That Rely on Email Communication
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={4}>
              Empowering companies to connect with their customers through
              timely, targeted email campaigns that drive engagement, build
              loyalty, and boost ROI.
            </Typography>
          </Grid>

          {/* Right Side - Feature Cards */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3} justifyContent="center">
              {features.map((feature, i) => (
                <Grid item xs={12} sm={6} md={6} key={feature.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        background: "#fffcc", // semi-transparent white
                        border: "1px solid #e0e0e0",
                        backdropFilter: "blur(10px)",
                        borderRadius: 1,
                        height: "8rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        // width: "14rem"
                        
                      }}
                    >
                      <Typography fontWeight={700} gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {feature.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Features Section */}
      {/* <Box
        sx={{
          py: 8,
          px: { xs: 2, md: 8 },
          background: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          mb={4}
          color={theme.palette.text.primary}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    boxShadow: 3,
                    background: theme.palette.background.default,
                    height: "100%",
                    minHeight: 260,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mb={2}
                  >
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.background.paper,
                        width: 56,
                        height: 56,
                        mb: 1,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography fontWeight={600} fontSize="1.2rem">
                      {feature.title}
                    </Typography>
                  </Box>
                  <CardContent
                    sx={{
                      pt: 0,
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color={theme.palette.text.secondary}
                      align="center"
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box> */}

      {/* Quick Links Section */}
      {/* <Box sx={{ py: 6, px: { xs: 2, md: 8 }, background: theme.palette.background.default }}>
        <Typography variant="h5" align="center" fontWeight={600} mb={3} color={theme.palette.text.primary}>
          Quick Links
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {quickLinks.map((link) => (
            <Grid item key={link.label}>
              <Button
                component={Link}
                to={link.to}
                variant="outlined"
                color="primary"
                sx={{ fontWeight: 500, px: 3, borderRadius: 3 }}
              >
                {link.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box> */}

      {/* Social Icons Section */}
      <Box
        sx={{
          py: 4,
          textAlign: "center",
          background: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          mb={2}
          color={theme.palette.text.primary}
        >
          Connect with us
        </Typography>
        <Box display="flex" justifyContent="center" gap={3}>
          {socialLinks.map((social) => (
            <MuiLink
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: 32,
                color: theme.palette.primary.main,
                transition: "color 0.2s",
                "&:hover": { color: theme.palette.secondary.main },
              }}
              aria-label={social.label}
            >
              {social.icon}
            </MuiLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
