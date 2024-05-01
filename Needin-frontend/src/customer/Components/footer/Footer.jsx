import { Grid, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          IN Impact
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          For Customers
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          User Review
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Categores Near You
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Need Help
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Contact Us
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          For Partners
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Register as an Employee
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Employee Conditions
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid container direction="column" alignItems="center">
          <Typography className='pb-5' variant="h6" gutterBottom>
            Social Links
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Facebook fontSize="large" />
            </Grid>
            <Grid item>
              <Instagram fontSize="large" />
            </Grid>
            <Grid item>
              <LinkedIn fontSize="large" />
            </Grid>
            <Grid item>
              <Twitter fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024. All rights Need In Team.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by TEAM NEED IN.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;