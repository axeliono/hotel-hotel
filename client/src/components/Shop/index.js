import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, Icon, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({}));

const Shop = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Hotel Shop
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Create Account</Button>
          <Button color="default">
            <ShoppingCart />{" "}Cart
          </Button>
        </Toolbar>
      </AppBar>
      <header>
          
      </header>
    </div>
  );
};

export default Shop;
