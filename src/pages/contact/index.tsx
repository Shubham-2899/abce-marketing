import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const ContactUs = () => {
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
    <Box
      sx={{
        background: "whitesmoke",
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
          color: "#777",
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
          reach out to us. Fill out the form below, and we'll respond as quickly
          as possible.
        </Typography>
        <form onSubmit={handleSubmit}>
          {successMessage && (
            <Typography
              variant="body2"
              align="center"
              color="green"
              sx={{ marginTop: "10px" }}
            >
              {successMessage}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "5px",
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
              sx={{ background: "white" }}
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
              sx={{ background: "white" }}
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
              sx={{ background: "white" }}
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              fullWidth
              size="small"
              sx={{ background: "white" }}
            />
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              sx={{ alignSelf: "center" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
