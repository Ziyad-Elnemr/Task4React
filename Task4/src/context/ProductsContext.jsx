import React, { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export const ProductsProvider = ({ children }) => {
  // Initial sample products
  const initialProducts = [
    {
      id: 1,
      name: "Laptop Pro",
      description: "High-performance laptop for professionals",
      price: 1299.99,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Smartphone X",
      description: "Latest smartphone with amazing features",
      price: 899.99,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Headphones Ultra",
      description: "Noise-cancelling wireless headphones",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Gaming Chair",
      description: "Ergonomic gaming chair for long sessions",
      price: 399.99,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Smart Watch",
      description: "Fitness tracking smartwatch",
      price: 249.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    },
    {
      id: 6,
      name: "Keyboard Mechanical",
      description: "RGB mechanical gaming keyboard",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
    },
  ];

  // Load products from localStorage or use initial products
  const loadProductsFromStorage = () => {
    try {
      const savedProducts = localStorage.getItem("products");
      if (savedProducts) {
        return JSON.parse(savedProducts);
      }
    } catch (error) {
      console.error("Error loading products from localStorage:", error);
    }
    return initialProducts;
  };

  const [products, setProducts] = useState(loadProductsFromStorage);

  // Save products to localStorage whenever products change
  useEffect(() => {
    try {
      localStorage.setItem("products", JSON.stringify(products));
    } catch (error) {
      console.error("Error saving products to localStorage:", error);
    }
  }, [products]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(), // Simple ID generation
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const getProductById = (id) => {
    return products.find((product) => product.id === parseInt(id));
  };

  const resetProducts = () => {
    setProducts(initialProducts);
  };

  const value = {
    products,
    addProduct,
    getProductById,
    resetProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
