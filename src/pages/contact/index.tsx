import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        <Typography variant="body1" align="center" gutterBottom>
          Contact us for any queries or feedback. Or fill in the form below and
          we will get back to you as soon as possible.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
              marginTop: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              // backgroundColor: "#f9f9f9",
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
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
