import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AddProdModal from '../AddProdModal';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar variant="regular">
          <Typography variant="h6" color="inherit" component="div">
            Header
          </Typography>
          <Button
            variant="outlined"
            sx={{ ml: 'auto' }}
            startIcon={<MenuIcon />}
            onClick={handleOpen}
          >
            Add Product
          </Button>
          <AddProdModal open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
