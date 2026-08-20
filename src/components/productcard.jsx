import React from "react";

import './product.css';

function ProductCard({ product,onAddToCart}) {
  return (
    <div className="col-md-3">
      <div className="card product-card h-100 shadow-sm border-0">
        <div className="product-img-wrapper">

        <img src={product.image} className="card-img-top product-img" alt={product.title} />

        <div className="card-body text-center">
          <h5 className="card-title">{product.title}</h5>
          <h4 className="price">₹{product.price}</h4>
          <button className="btn btn-primary w-100"
          
          onClick={()=> onAddToCart(product)}>


            Add to Cart
          </button>
          </div>
          </div>
        </div>
      </div>
   
  );
}

export default ProductCard;


