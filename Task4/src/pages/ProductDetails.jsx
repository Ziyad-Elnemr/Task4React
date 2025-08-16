import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useProducts();

  const product = getProductById(id);

  useEffect(() => {
    document.title = product
      ? `${product.name} - Our Store`
      : "Product Details - Our Store";
  }, [product]);

  if (!product) {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/Products")}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              product.image ||
              "https://via.placeholder.com/500x400/cccccc/666666?text=No+Image"
            }
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <div className="product-details">
            <h1 className="display-5 mb-3">{product.name}</h1>
            <p className="text-muted mb-2">Product ID: {product.id}</p>

            {product.price && (
              <h3 className="text-success mb-4">${product.price}</h3>
            )}

            <div className="mb-4">
              <h5>Description:</h5>
              <p className="lead">
                {product.description || "No description available"}
              </p>
            </div>

            <div className="d-grid gap-2 d-md-flex">
              <button className="btn btn-success btn-lg me-md-2">
                Add to Cart
              </button>
              <button className="btn btn-warning btn-lg">Buy Now</button>
            </div>

            <div className="mt-4">
              <button
                className="btn btn-outline-secondary"
                onClick={() => navigate("/Products")}
              >
                ← Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Product Information */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Product Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <strong>Name:</strong> {product.name}
                </div>
                <div className="col-md-4">
                  <strong>ID:</strong> {product.id}
                </div>
                <div className="col-md-4">
                  <strong>Price:</strong> ${product.price || "N/A"}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <strong>Description:</strong>
                  <p className="mt-2">
                    {product.description || "No description available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
