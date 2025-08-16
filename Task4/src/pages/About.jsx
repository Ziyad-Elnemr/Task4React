import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Our Store";
  }, []);

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-4">About Our Store</h1>
          <p className="lead">
            Your one-stop destination for premium products and exceptional
            service
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body p-5">
              <h2 className="h3 mb-4 text-primary">
                Welcome to Our E-Commerce Platform
              </h2>

              <p className="mb-4">
                We are a modern e-commerce platform dedicated to bringing you
                the finest selection of products at competitive prices. Our
                mission is to provide an exceptional online shopping experience
                that combines quality products, user-friendly interface, and
                outstanding customer service.
              </p>

              <h3 className="h4 mb-3 text-secondary">What We Offer</h3>
              <div className="row mb-4">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Quality Products:</strong> Carefully curated
                      selection of premium items
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Competitive Prices:</strong> Best deals and value
                      for your money
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Fast Shipping:</strong> Quick and reliable
                      delivery service
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Secure Shopping:</strong> Safe and encrypted
                      transactions
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>24/7 Support:</strong> Round-the-clock customer
                      assistance
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Easy Returns:</strong> Hassle-free return and
                      exchange policy
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="h4 mb-3 text-secondary">Our Product Categories</h3>
              <p className="mb-4">
                We specialize in a wide range of products including electronics,
                accessories, gaming equipment, and lifestyle products. Whether
                you're looking for the latest laptop, premium headphones,
                ergonomic furniture, or cutting-edge smartwatches, we have
                something for everyone.
              </p>

              <h3 className="h4 mb-3 text-secondary">Why Choose Us?</h3>
              <p className="mb-4">
                Our platform is built with modern React technology, ensuring a
                smooth and responsive shopping experience across all devices. We
                continuously update our inventory with the latest products and
                maintain competitive pricing to give you the best value.
              </p>

              <div className="alert alert-info" role="alert">
                <h4 className="alert-heading">Customer Satisfaction</h4>
                <p className="mb-0">
                  We prioritize customer satisfaction above all else. Our
                  dedicated team works tirelessly to ensure that every
                  interaction with our platform exceeds your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center mb-4">Our Achievements</h3>
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card bg-primary text-white">
                <div className="card-body">
                  <h2 className="card-title">10,000+</h2>
                  <p className="card-text">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <h2 className="card-title">500+</h2>
                  <p className="card-text">Products Available</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card bg-warning text-white">
                <div className="card-body">
                  <h2 className="card-title">99.9%</h2>
                  <p className="card-text">Uptime Guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card bg-info text-white">
                <div className="card-body">
                  <h2 className="card-title">24/7</h2>
                  <p className="card-text">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row mt-5">
        <div className="col-lg-8 mx-auto">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h3 className="mb-3">Get in Touch</h3>
              <p className="mb-3">
                Have questions or need assistance? We're here to help! Contact
                our friendly customer support team.
              </p>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <i className="bi bi-envelope-fill text-primary fs-3"></i>
                  <p className="mt-2 mb-0">Email</p>
                  <small>support@ourstore.com</small>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="bi bi-telephone-fill text-success fs-3"></i>
                  <p className="mt-2 mb-0">Phone</p>
                  <small>+1 (555) 123-4567</small>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="bi bi-chat-dots-fill text-info fs-3"></i>
                  <p className="mt-2 mb-0">Live Chat</p>
                  <small>Available 24/7</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
