import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  AccountCircle,
  ExitToApp,
  ShoppingCart,
  Store,
  ArrowBack, // Change the icon to ArrowBack (example)
} from "@mui/icons-material";

import ProductForSel from "./ProductForSel";
import PurchasePage from "./PurchasePage";
import ReturnRequestPage from "./ReturnRequestPage";
import TransactionPage from "./Admin/TransactionPage";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8a80", // Change this to the primary color you desire
    },
  },
});

const CustomerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Your site logo here */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img
              src="Badiaa.png"
              alt="Your Site Logo"
              style={{ height: "60px", marginRight: "16px" }}
            />
          </Typography>

          {/* Customer Profile */}
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <AccountCircle fontSize="small" />
            <Typography variant="body1">Profile</Typography>
          </IconButton>

          {/* Purchases */}
          <MenuItem onClick={handleMenuClose}>
            <ShoppingCart fontSize="small" />
            <Typography variant="body1">Purchases</Typography>
          </MenuItem>

          {/* Products */}
          <MenuItem onClick={handleMenuClose}>
            <Store fontSize="small" />
            <Typography variant="body1">Products</Typography>
          </MenuItem>

          {/* Return Request */}
          <MenuItem onClick={handleMenuClose}>
            <ArrowBack fontSize="small" /> {/* Changed to ArrowBack */}
            <Typography variant="body1">Return Request</Typography>
          </MenuItem>

          {/* Log Out */}
          <MenuItem onClick={handleMenuClose}>
            <ExitToApp fontSize="small" />
            <Typography variant="body1">Log Out</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default CustomerMenu;
