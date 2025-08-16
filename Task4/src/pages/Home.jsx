import React, { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import Slideshow from "../component/Slideshow";
import Display from "../component/Display";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Our Store";
  }, []);

  const { products } = useProducts();

  // Get images from products for slideshow
  const productImages = products.slice(0, 5).map((product) => product.image);

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid p-0">
        <Slideshow images={productImages} />
      </div>

      {/* Welcome Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 mb-4">Welcome to Our Store</h1>
            <p className="lead">Discover amazing products at great prices</p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <Display prodArr={products} limit={5} title="Featured Products" />

      {/* Call to Action */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/Products" className="btn btn-primary btn-lg">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
