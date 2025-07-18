import { Box, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import InsightsIcon from '@mui/icons-material/Insights';

const projects = [
  {
    name: 'InboxPro Campaign',
    icon: <EmailIcon fontSize="large" color="primary" />,
    description: 'Designed and executed a multi-segmented email campaign for a SaaS startup, resulting in a 35% open rate and 12% conversion.',
    results: 'Increased user signups by 1,200 in 2 months.',
  },
  {
    name: 'GrowthBoost Automation',
    icon: <TrendingUpIcon fontSize="large" color="secondary" />,
    description: 'Implemented advanced automation for an e-commerce brand, sending personalized offers based on user behavior.',
    results: 'Drove a 28% increase in repeat purchases.',
  },
  {
    name: 'Subscriber Surge',
    icon: <GroupIcon fontSize="large" color="primary" />,
    description: 'Developed a subscriber growth strategy for a digital magazine, including A/B testing and referral incentives.',
    results: 'Grew the list by 5,000+ engaged subscribers in 6 months.',
  },
  {
    name: 'Analytics Insight Suite',
    icon: <InsightsIcon fontSize="large" color="secondary" />,
    description: 'Built a custom analytics dashboard for a retail client to track campaign ROI and engagement in real time.',
    results: 'Enabled data-driven decisions and improved campaign ROI by 22%.',
  },
];

const Portfolio = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 8 }, background: theme.palette.background.default }}>
      <Typography variant="h3" align="center" fontWeight={700} mb={4} color={theme.palette.text.primary}>
        Our Portfolio
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((p, i) => (
          <Grid item xs={12} sm={6} md={4} key={p.name}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <Card sx={{ p: 2, borderRadius: 4, boxShadow: 3, background: theme.palette.background.paper }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ bgcolor: theme.palette.background.default, mr: 2 }}>
                    {p.icon}
                  </Avatar>
                  <Box>
                    <Typography fontWeight={600}>{p.name}</Typography>
                  </Box>
                </Box>
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2" color={theme.palette.text.secondary} mb={1}>
                    {p.description}
                  </Typography>
                  <Typography variant="body1" color={theme.palette.primary.main} fontWeight={600}>
                    {p.results}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio; 