import React from "react";
import Cart from "../components/Cart";
import Product from "../components/Product";
import products from "../../product.json";

const ProductPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Products
      </h2>
      <Cart />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;