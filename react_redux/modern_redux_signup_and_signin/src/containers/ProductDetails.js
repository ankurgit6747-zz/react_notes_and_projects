import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  console.log("hello form product details");

  return (
    <div>
      <h1>Procuct details</h1>
    </div>
  );
};

export default ProductDetails;
