import React from "react";
import ProductCard from "./ProductCard";

const Display = ({ prodArr = [], limit = null, title = "Products" }) => {
  const displayProducts = limit ? prodArr.slice(0, limit) : prodArr;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">{title}</h2>
          {displayProducts.length === 0 ? (
            <div className="text-center">
              <p className="lead">No products available at the moment.</p>
            </div>
          ) : (
            <div className="row">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;
