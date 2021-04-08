import React from "react";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { isdbPromise } from "../../utils/helpers";
import { useDispatch } from "react-redux";

const ShoppingCart = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });

    isdbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;

    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });

      isdbPromise("cart", "put", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });

      isdbPromise("cart", "put", {
        ...item,
        purchaseQuantity: parseInt(value),
      });
    }
  };

  return <div></div>;
};

export default ShoppingCart;
