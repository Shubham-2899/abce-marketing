import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    contactNumberError: "",
    nameError: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  console.log("🚀 ~ ContactUs ~ successMessage:", successMessage);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Check for contact number length
    if (name === "contactNumber" && value.length > 10) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear previous errors when input changes
    setErrors({
      ...errors,
      [`${name}Error`]: "",
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobileNumber = (contactNumber: string) => {
    const contactNumberRegex = /^[6-9]\d{9}$/;
    return contactNumberRegex.test(contactNumber);
  };

  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, contactNumber, name } = formData;
    let emailError = "";
    let contactNumberError = "";
    let nameError = "";

    if (!validateEmail(email)) {
      emailError = "Please enter a valid email address";
    }

    if (!validateMobileNumber(contactNumber.toString())) {
      contactNumberError = "Please enter a valid 10-digit mobile number";
    }

    if (!validateName(name.trim())) {
      nameError = "Name must contain only alphabets and spaces";
    }

    if (emailError || contactNumberError || nameError) {
      setErrors({
        emailError,
        contactNumberError,
        nameError,
      });
    } else {
      setSuccessMessage(
        "Message sent successfully! One of our team members will get back to you soon."
      );
      console.log("formData:", formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          background: theme.palette.background.paper,
          width: "100%",
          py: 8,
          px: { xs: 2, md: 8 },
        }}
      >
        <Box
          sx={{
            padding: "20px",
            maxWidth: "700px",
            margin: "auto",
            color: theme.palette.text.primary,
          }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontSize: "30px" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{
              textAlign: { xs: "justify", sm: "center" },
              fontSize: { sm: "16px", xs: "14px" },
            }}
          >
            We'd love to hear from you! For any questions or feedback, please
            reach out to us. Fill out the form below, and we'll respond as
            quickly as possible.
          </Typography>
        </Box>
        {/* Contact Info Cards */}
        <Grid container spacing={4} justifyContent="center" mb={4}>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                background: theme.palette.background.default,
              }}
            >
              <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                <LocationOnIcon />
              </Avatar>
              <CardContent sx={{ p: 0 , minHeight :"6rem" }}>
                <Typography fontWeight={600}>Address</Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.text.secondary}
                >
                  1 Kharadi,EON Free Zone, Knowledge Park, Pune, Maharashtra 411014
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                background: theme.palette.background.default,
              }}
            >
              <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                <EmailIcon />
              </Avatar>
              <CardContent sx={{ p: 0 , minHeight :"6rem" }}>
                <Typography fontWeight={600}>Email</Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.text.secondary}
                >
                  admin@raspixmedia.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                background: theme.palette.background.default,
              }}
            >
              <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                <PhoneIcon />
              </Avatar>
              <CardContent sx={{ p: 0 , minHeight :"6rem" }}>
                <Typography fontWeight={600}>Phone</Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.text.secondary}
                >
                  --
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Google Map Embed */}
        <Box sx={{ width: "100%", maxWidth: 700, mx: "auto", mb: 4 }}>
          <Box
            sx={{
              height: 200,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 2,
            }}
          >
            {/* 
              Replace the src below with your Google Maps embed URL.
              To use your API key, generate the embed link from Google Maps Platform.
              Example: 
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123+Main+Street,Mumbai,India`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RASPIX Media Location"
              />
            */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "text.secondary",
                fontWeight: 500,
                fontSize: 18,
                background: "rgba(0,0,0,0.03)",
              }}
            >
              Google Map
            </Box>
          </Box>
        </Box>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "20px",
              margin: "auto",
              borderRadius: "5px",
              background: theme.palette.background.default,
              maxWidth: "700px",
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              size="small"
              error={Boolean(errors.nameError)}
              helperText={errors.nameError}
              sx={{ background: theme.palette.background.paper }}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              size="small"
              error={Boolean(errors.emailError)}
              helperText={errors.emailError}
              sx={{ background: theme.palette.background.paper }}
              required
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              name="contactNumber"
              type="number"
              value={formData.contactNumber}
              onChange={handleChange}
              fullWidth
              size="small"
              error={Boolean(errors.contactNumberError)}
              helperText={errors.contactNumberError}
              sx={{ background: theme.palette.background.paper }}
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={4}
              sx={{ background: theme.palette.background.paper }}
              required
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ fontWeight: 600, fontSize: "16px" }}
            >
              Submit
            </Button>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default ContactUs;
