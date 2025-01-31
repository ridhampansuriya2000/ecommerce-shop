import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
