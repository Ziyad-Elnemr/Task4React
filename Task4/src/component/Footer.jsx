import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; 2025 Ziyad Elnemr. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="social-links">
              <a href="#" className="text-white mx-2 text-decoration-none">
                Facebook
              </a>
              <a href="#" className="text-white mx-2 text-decoration-none">
                Twitter
              </a>
              <a href="#" className="text-white mx-2 text-decoration-none">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
