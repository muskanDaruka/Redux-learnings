import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/slices/cartSlice";

const Product = ({ id, productName, image, price }) => {
    const dispatch = useDispatch()
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300 bg-white">
      <img
        className="w-full h-44 object-contain mb-4"
        src={image}
        alt={productName}
      />

      <h5 className="text-lg font-semibold text-center mb-2">
        {productName}
      </h5>

      <p className="text-xl font-bold text-blue-600 mb-4">
        ₹{price}
      </p>

      <button onClick={(e) => dispatch(addItems({name: productName, price: price}))} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;