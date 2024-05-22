import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        bgcolor: "whitesmoke",
        color: "#777",
        padding: { xs: "10% 8%", sm: "10% 10%", md: "5% 15%" },
        textAlign: "center",
        fontSize: "16px",
      }}
    >
      <Typography sx={{ pt: "20px", fontSize: "30px" }}>About Us</Typography>
      <Typography sx={{ textAlign: "justify", mt: 2 }}>
        Monkey Media Email Marketing is a leading email marketing service
        provider that offers a comprehensive suite of tools to help businesses
        grow. We help businesses of all sizes to create, send, and track their
        email campaigns. Our platform is easy to use and comes with a variety of
        features that make it easy for businesses to create professional-looking
        emails and newsletters.
      </Typography>
      <Typography sx={{ textAlign: "justify", mt: 2 }}>
        Our team of experts is dedicated to helping businesses succeed with
        email marketing. We provide personalized support to help businesses get
        the most out of their email campaigns. Whether you are new to email
        marketing or an experienced pro, we have the tools and expertise to help
        you succeed.
      </Typography>
      <Typography sx={{ textAlign: "justify", mt: 2 }}>
        We offer a variety of templates that can be customized to fit your brand
        and style. Our platform also includes advanced features like A/B
        testing, automation, and analytics to help you get the most out of your
        email campaigns.
      </Typography>
      <Typography sx={{ pt: "20px", fontSize: "30px" }}>Our Mission</Typography>
      <Typography sx={{ textAlign: "justify", mt: 2 }}>
        Our mission is to help businesses succeed with email marketing. We
        believe that email marketing is one of the most effective ways to reach
        customers and grow your business. We are committed to providing the best
        tools and support to help businesses succeed with email marketing.
      </Typography>
      <Typography sx={{ pt: "20px", fontSize: "30px" }}>Our Team</Typography>
      <Typography sx={{ textAlign: "justify", mt: 2 }}>
        Our team of experts has years of experience in the industry and is
        committed to providing the best tools and support to help businesses
        succeed with email marketing. Whether you are new to email marketing or
        an experienced pro, we have the tools and expertise to help you succeed.
      </Typography>
    </Box>
  );
};

export default AboutUs;
