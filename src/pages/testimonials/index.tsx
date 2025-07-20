import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya Sharma',
    company: 'TechNova Solutions',
    quote: 'RASPIX Media helped us achieve a 40% increase in email engagement. Their team is responsive, creative, and results-driven.',
    avatar: '',
  },
  {
    name: 'David Lee',
    company: 'GreenLeaf Retail',
    quote: 'The automation and analytics features are top-notch. We now reach our customers at the perfect time, every time.',
    avatar: '',
  },
  {
    name: 'Fatima Al-Farsi',
    company: 'Al-Farsi Consulting',
    quote: 'Professional, reliable, and innovative. Our campaigns have never looked better or performed stronger.',
    avatar: '',
  },
  {
    name: 'Lucas Martins',
    company: 'Martins Digital',
    quote: 'RASPIX Media is a true partner in our growth. Their expertise in email marketing is unmatched.',
    avatar: '',
  },
];

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('');

const Testimonials = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 8 }, background: theme.palette.background.default }}>
      <Typography variant="h3" align="center" fontWeight={700} mb={4} color={theme.palette.text.primary}>
        What Our Clients Say
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((t, i) => (
          <Grid item xs={12} sm={6} md={4} key={t.name}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <Card sx={{ p: 2, borderRadius: 4, boxShadow: 3, background: theme.palette.background.paper , minHeight : "12rem" }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                    {getInitials(t.name)}
                  </Avatar>
                  <Box>
                    <Typography fontWeight={600}>{t.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{t.company}</Typography>
                  </Box>
                </Box>
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body1" color={theme.palette.text.primary}>
                    "{t.quote}"
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

export default Testimonials; 