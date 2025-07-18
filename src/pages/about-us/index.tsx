import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const team = [
  {
    name: "Amit Verma",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in digital marketing and SaaS. Passionate about innovation and client success.",
    avatar: "",
  },
  {
    name: "Sara Lee",
    role: "Head of Strategy",
    bio: "Expert in campaign strategy and analytics. Loves turning data into actionable growth.",
    avatar: "",
  },
  {
    name: "Mohammed Al-Sayed",
    role: "Lead Developer",
    bio: "Full-stack developer focused on scalable, secure, and user-friendly solutions.",
    avatar: "",
  },
  {
    name: "Priya Nair",
    role: "Client Success Manager",
    bio: "Ensures every client gets the most from our platform. Known for her dedication and empathy.",
    avatar: "",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const values = [
  {
    icon: <EmojiObjectsIcon color="primary" fontSize="large" />,
    title: "Innovation",
    desc: "We embrace new ideas and technology.",
  },
  {
    icon: <VerifiedUserIcon color="secondary" fontSize="large" />,
    title: "Trust",
    desc: "Integrity and transparency in all we do.",
  },
  {
    icon: <TrendingUpIcon color="primary" fontSize="large" />,
    title: "Growth",
    desc: "We help clients and our team grow.",
  },
  {
    icon: <Diversity3Icon color="secondary" fontSize="large" />,
    title: "Collaboration",
    desc: "We win together as a team.",
  },
];

const AboutUs = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: 220, md: 280 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 6,
          px: 2,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}11 0%, ${theme.palette.secondary.main}11 100%)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color={theme.palette.text.primary}
            mb={2}
          >
            About RASPIX Media
          </Typography>
          <Typography variant="h5" color={theme.palette.text.secondary} mb={2}>
            Empowering your business with reliable, innovative, and impactful
            email marketing solutions.
          </Typography>
        </motion.div>
      </Box>

      {/* Company Story Section */}
      <Box sx={{ py: 6, px: { xs: 2, md: 8 }, maxWidth: 1200, mx: "auto" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                mb={2}
                color={theme.palette.text.primary}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                color={theme.palette.text.secondary}
                mb={2}
              >
                RASPIX Media Email Marketing is a leading provider of email
                marketing solutions for businesses of all sizes. Our platform is
                designed to help you create, send, and track professional
                campaigns with ease. We believe in the power of email to build
                relationships, drive growth, and deliver measurable results.
              </Typography>
              <Typography variant="body1" color={theme.palette.text.secondary}>
                With a team of passionate experts, we combine technology,
                creativity, and data-driven strategy to help you reach your
                audience and achieve your goals. Whether you’re a startup or an
                enterprise, we’re committed to your success.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 180, md: 240 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/src/assets/raslogo.png"
                  alt="RASPIX Media Logo"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: 16,
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.08)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Core Values Section */}
      <Box
        sx={{
          py: 6,
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
          Our Core Values
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {values.map((val, i) => (
            <Grid item xs={12} sm={6} md={3} key={val.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 3,
                    px: 2,
                    borderRadius: 3,
                    background: "none",
                    minHeight: 140,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.background.paper,
                      width: 56,
                      height: 56,
                      mb: 1,
                      boxShadow: 1,
                    }}
                  >
                    {val.icon}
                  </Avatar>
                  <Typography
                    fontWeight={600}
                    fontSize="1.1rem"
                    mb={1}
                    color={theme.palette.text.primary}
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    align="center"
                  >
                    {val.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our Team Section */}
      <Box sx={{ mt: 8, mx: 2 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          mb={4}
          color={theme.palette.text.primary}
        >
          Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {team.map((member, i) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <Card
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    boxShadow: 3,
                    background: theme.palette.background.paper,
                    height: "100%",
                    minHeight: 320,
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
                        bgcolor: theme.palette.primary.main,
                        width: 64,
                        height: 64,
                        mb: 1,
                      }}
                    >
                      {getInitials(member.name)}
                    </Avatar>
                    <Typography fontWeight={600}>{member.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
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
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
