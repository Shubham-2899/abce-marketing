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

const AboutUs = () => {
  const theme = useTheme();
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          padding: { xs: "10% 8%", sm: "10% 10%", md: "5% 15%" },
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        <Typography sx={{ pt: "20px", fontSize: "30px" }}>About Us</Typography>
        <Typography sx={{ textAlign: "justify", mt: 2 }}>
          RASPIX Media Email Marketing is a leading email marketing service
          provider that offers a comprehensive suite of tools to help businesses
          grow. We help businesses of all sizes to create, send, and track their
          email campaigns. Our platform is easy to use and comes with a variety
          of features that make it easy for businesses to create
          professional-looking emails and newsletters.
        </Typography>
        <Typography sx={{ textAlign: "justify", mt: 2 }}>
          Our team of experts is dedicated to helping businesses succeed with
          email marketing. We provide personalized support to help businesses
          get the most out of their email campaigns. Whether you are new to
          email marketing or an experienced pro, we have the tools and expertise
          to help you succeed.
        </Typography>
        <Typography sx={{ textAlign: "justify", mt: 2 }}>
          We offer a variety of templates that can be customized to fit your
          brand and style. Our platform also includes advanced features like A/B
          testing, automation, and analytics to help you get the most out of
          your email campaigns.
        </Typography>
        <Typography sx={{ pt: "20px", fontSize: "30px" }}>
          Our Mission
        </Typography>
        <Typography sx={{ textAlign: "justify", mt: 2 }}>
          Our mission is to help businesses succeed with email marketing. We
          believe that email marketing is one of the most effective ways to
          reach customers and grow your business. We are committed to providing
          the best tools and support to help businesses succeed with email
          marketing.
        </Typography>
        <Typography sx={{ pt: "20px", fontSize: "30px" }}>Our Team</Typography>
        {/* <Typography sx={{ textAlign: 'justify', mt: 2 }}>
          Our team of experts has years of experience in the industry and is
          committed to providing the best tools and support to help businesses
          succeed with email marketing. Whether you are new to email marketing or
          an experienced pro, we have the tools and expertise to help you succeed.
        </Typography> */}
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
        <Typography sx={{ textAlign: "center", my: 2, fontSize: "18px" }}>
          Our team of experts has years of experience in the industry and is
          committed to providing the best tools and support to help businesses
          succeed with email marketing. Whether you are new to email marketing
          or an experienced pro, we have the tools and expertise to help you
          succeed.
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
    </motion.div>
  );
};

export default AboutUs;
