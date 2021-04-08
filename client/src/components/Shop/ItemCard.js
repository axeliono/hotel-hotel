import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ItemCard = (item) => {
  const classes = useStyles();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
    }
  };

  return (
    <Card className={classes.root} color="primary">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
          hover="true"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" justify="center">
            Name: {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" justify="center">
            Amount in stock: {quantity}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" justify="center">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions justify="center">
        <Button
          size="large"
          color="primary"
          hover="secondary"
          onClick={addToCart}
        >
          Purchase
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
