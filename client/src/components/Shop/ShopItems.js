import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "./ItemCard";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { isdbPromise } from "../../utils/helpers";
import { Grid } from "@material-ui/core";

const ShopItems = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        isdbPromise("products", "put", product);
      });
    } else if (!loading) {
      isdbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <Container alignContent="center">
      <Grid container justify="center" spacing={1} >
        {filterProducts().map((product) => (
          <Grid item xs={6} justify="center" >
            <ItemCard
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopItems;
