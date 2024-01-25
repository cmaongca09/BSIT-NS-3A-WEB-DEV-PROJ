import React, { useState } from "react";
import SampleProducts from "../Data/SampleProducts.json";
import ProductModal from "../Component/ProductModal.js";
import "./Shop.css";

export const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <h1>Shop page</h1>
      <div className="product-grid">
        {SampleProducts.map((product, index) => (
          <div className="product" key={index}>
            <button onClick={() => openModal(product)}>
              <img
                src={require(`../imgassets/${product.imageurl}`)}
                alt={product.name}
              />
              <p>{product.name}</p>
            </button>
          </div>
        ))}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </section>
  );
};
