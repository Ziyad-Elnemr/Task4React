import React, { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import Display from "../component/Display";

const Products = () => {
  useEffect(() => {
    document.title = "Products - Our Store";
  }, []);

  const { products } = useProducts();

  return (
    <>
      <Display prodArr={products} title="All Products" />
    </>
  );
};

export default Products;
