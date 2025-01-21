"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../app/api/products"; // Import the getProducts function
// import { useCart } from '@/app/context/CartContext'; //

const ProductGrid = () => {
  interface Product {
    id: string;
    title: string;
    image: string;
    excerpt: string;
    description: string;
    currentPrice: number;
    markedPrice: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Fetch the products from Sanity when the component mounts
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);
    };
    fetchData();
  }, []);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredProducts(products); // If no query, show all products
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="product-grid-container">
      {/* <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for products"
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
