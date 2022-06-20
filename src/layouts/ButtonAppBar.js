import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <img src="https://turnos.ungs.edu.ar/wp-content/uploads/2020/11/cropped-logo_texto_ungs_blanco-1536x201.png" style={{width:200}} alt="logo" />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App Aprende Ruso
          </Typography>
          <Button color="inherit">By Epruso</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
