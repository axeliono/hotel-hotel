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
        <Typography color="secondary">
          <Button  variant="h3">
            <ShoppingCart /> Cart
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;
