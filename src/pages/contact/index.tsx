import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
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
              value={formData.name}
              onChange={handleChange}
              fullWidth
              size="small"
              sx={{ background: "white" }}
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
              sx={{ background: "white" }}
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              fullWidth
              size="small"
              sx={{ background: "white" }}
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
              variant="contained"
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
