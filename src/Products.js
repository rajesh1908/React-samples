import React from "react";
import Product from "./Productsdetails";
import Productsdata from "./components/schoolProducts";

function Products() {
  const productcomponents = Productsdata.map(item => (
    <Product key={item.id} product={item} />
  ));
  return <div>{productcomponents}</div>;
}

export default Products;
