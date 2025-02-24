import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FitbitIcon from '@mui/icons-material/Fitbit';

export default function Header() {
  

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#040152' }}>
      <Toolbar>
      <FitbitIcon sx={{ fontSize: 40, color: 'white' }} />
        <Typography variant="h6" sx={{ ml: 1 }}>
          ABC COMPANY
        </Typography>
      </Toolbar>
    </AppBar>
  );
}