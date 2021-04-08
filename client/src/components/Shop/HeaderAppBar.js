import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const HeaderAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          <Link to="/">Hotel Hotel</Link>
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Create Account</Button>
        <Button color="default">
          <ShoppingCart /> Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;
