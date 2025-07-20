import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const theme = useTheme();
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
          py: 8,
          px: { xs: 2, md: 8 },
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Typography variant="h3" fontWeight={700} mb={3} align="center">
          Privacy Policy
        </Typography>
        <Typography variant="body1" mb={2}>
          <b>Effective Date:</b> {new Date().getFullYear()}<br />
          RASPIX Media Services (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
        </Typography>
        <Typography variant="h6" fontWeight={600} mt={3} mb={1}>Information We Collect</Typography>
        <Typography variant="body2" mb={2}>
          We may collect personal information such as your name, email address, phone number, and company details when you fill out forms or contact us. We also collect non-personal information such as browser type, device, and usage data.
        </Typography>
        <Typography variant="h6" fontWeight={600} mt={3} mb={1}>How We Use Your Information</Typography>
        <Typography variant="body2" mb={2}>
          We use your information to provide and improve our services, respond to inquiries, send marketing communications, and analyze website usage. We do not sell your personal information to third parties.
        </Typography>
        <Typography variant="h6" fontWeight={600} mt={3} mb={1}>Cookies & Tracking</Typography>
        <Typography variant="body2" mb={2}>
          Our website may use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings.
        </Typography>
        <Typography variant="h6" fontWeight={600} mt={3} mb={1}>Data Security</Typography>
        <Typography variant="body2" mb={2}>
          We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
        </Typography>
        <Typography variant="h6" fontWeight={600} mt={3} mb={1}>Your Rights</Typography>
        <Typography variant="body2" mb={2}>
          You may request access to, correction of, or deletion of your personal information by contacting us at info@raspixmedia.com.
        </Typography>
        <Typography variant="h6" fontWeight={600} mt={3} mb={1}>Changes to This Policy</Typography>
        <Typography variant="body2" mb={2}>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
        </Typography>
        <Typography variant="h6" fontWeight={600} mt={3} mb={1}>Contact Us</Typography>
        <Typography variant="body2">
          If you have any questions about this Privacy Policy, please contact us at info@raspixmedia.com.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default PrivacyPolicy; 