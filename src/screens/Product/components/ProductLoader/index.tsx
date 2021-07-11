import React from "react";

function ProductLoader() {
  return (
    <div className="product-loader">
      <figure className="loader product-loader-img"></figure>
      <div className="product-loader-content">
        <figure className="product-loader-name loader"></figure>
        <div className="product-loader-section">
          <figure className="product-loader-left loader"></figure>
          <figure className="product-loader-right loader"></figure>
        </div>
        <div className="product-loader-section">
          <figure className="product-loader-left loader"></figure>
          <figure className="product-loader-right loader"></figure>
        </div>
        <div className="product-loader-section">
          <figure className="product-loader-left loader"></figure>
          <figure className="product-loader-right loader"></figure>
        </div>
      </div>
    </div>
  );
}

export default ProductLoader;
