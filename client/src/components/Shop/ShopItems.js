import React from "react";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "./ItemCard";

const ShopItems = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products } = state;
  return (
    <Container justify="center">
      <ItemCard />
    </Container>
  );
};

export default ShopItems;
