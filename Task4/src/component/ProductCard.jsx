import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const fallbackImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2NjY2NjYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imageError ? fallbackImage : product.image || fallbackImage}
          className="card-img-top"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
          onError={handleImageError}
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">ID: {product.id}</p>
          <p className="card-text flex-grow-1">
            {product.description || "No description available"}
          </p>
          {product.price && (
            <p className="card-text">
              <strong className="text-success">${product.price}</strong>
            </p>
          )}
          <div className="mt-auto">
            <Link
              to={`/product/${product.id}`}
              className="btn btn-primary w-100"
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
