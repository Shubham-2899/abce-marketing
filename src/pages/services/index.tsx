import { Box, Typography, Card, CardContent, Avatar, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InsightsIcon from '@mui/icons-material/Insights';

const Services = () => {
  const theme = useTheme();
  const services = [
    {
      title: 'Transactional Emails',
      description: "Deliver time-sensitive emails instantly to your customers' inboxes, ensuring critical information is always on time.",
      icon: <EmailIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Marketing Campaigns',
      description: 'Create, schedule, and automate beautiful marketing emails that drive engagement and conversions.',
      icon: <DesignServicesIcon fontSize="large" color="secondary" />,
    },
    {
      title: 'Subscriber Growth',
      description: 'Grow your audience with smart signup forms, segmentation, and referral incentives.',
      icon: <GroupAddIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Analytics & Insights',
      description: 'Track every open, click, and conversion with real-time analytics and actionable insights.',
      icon: <InsightsIcon fontSize="large" color="secondary" />,
    },
  ];
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
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" fontWeight={700} mb={4} color={theme.palette.text.primary}>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, i) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <Card sx={{ p: 3, borderRadius: 4, boxShadow: 3, background: theme.palette.background.default, height: '100%' }}>
                  <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: theme.palette.background.paper, width: 56, height: 56, mb: 1 }}>
                      {service.icon}
                    </Avatar>
                    <Typography fontWeight={600} fontSize="1.2rem">{service.title}</Typography>
                  </Box>
                  <CardContent sx={{ pt: 0 }}>
                    <Typography variant="body2" color={theme.palette.text.secondary} align="center">
                      {service.description}
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

export default Services;
