import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2} sx={{mt:'20px'}}>
        {/* First section */}
        <Grid item xs={12} sm={6} md={3}>
          <div>

          </div>
        </Grid>
        {/* Second section */}
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography variant='h6'>MAIN MENU</Typography>
          </div>
        </Grid>
        {/* Third section */}
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography variant='h6'>USEFUL LINKS</Typography>

          </div>
        </Grid>
        {/* Fourth section */}
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography variant='h6'>CONTACT DETAILS</Typography>

          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
