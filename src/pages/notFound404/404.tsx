import { Button, Typography, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Refresh as RefreshIcon,
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import PageNotFoundImage from "../../assets/404IMG.jpg"; // Import your image file
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const NotFound404 = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleReloadPage = () => {
    window.location.reload(); // Reloads the current page
  };

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  const handleGoHome = () => {
    navigate("/"); // Navigates to the home page
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh', background: theme.palette.background.paper, color: theme.palette.text.primary }}
        >
          <Grid item>
            <Typography variant="h3" align="center">
              Server Error
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={PageNotFoundImage}
                alt="Page Not Found"
                style={{ maxWidth: '250px' }}
              />
            </div>
            <Typography variant="body1" align="center">
              This page either doesn't exist or it has been moved elsewhere.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
              sx={{ m: 1 }}
            >
              Go Home
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIcon />}
              onClick={handleGoBack}
              sx={{ m: 1 }}
            >
              Go Back
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<RefreshIcon />}
              onClick={handleReloadPage}
              sx={{ m: 1 }}
            >
              Reload
            </Button>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default NotFound404;
