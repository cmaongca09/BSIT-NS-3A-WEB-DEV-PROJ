import React, { useState } from "react";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalprice] = useState(0);

  const increaseQuantity = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
      setTotalprice((quantity + 1) * product.price);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalprice((quantity - 1) * product.price);
    }
  };

  if (!isOpen || !product) {
    return null;
  }

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          Back
        </button>
        <p>Price: {product.price}</p>
        <img
          src={require(`../imgassets/${product.imageurl}`)}
          alt={product.name}
          style={imgStyle}
        />
        <p>{product.name}</p>
        <p>{product.desc}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {totalPrice}</p>
        <button style={quantityButtonStyle} onClick={decreaseQuantity}>
          Decrease
        </button>
        <button style={quantityButtonStyle} onClick={increaseQuantity}>
          Increase
        </button>
        <button style={addButtonStyle}>ADD</button>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)", // semi-transparent overlay
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  maxHeight: "80%",
  overflow: "auto",
  textAlign: "center",
};

const closeButtonStyle = {
  cursor: "pointer",
  background: "#333",
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: "4px",
  marginRight: "10px",
};

const imgStyle = {
  width: "100%",
  maxHeight: "200px",
  objectFit: "contain",
  marginBottom: "10px",
};

const quantityButtonStyle = {
  cursor: "pointer",
  background: "#333",
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: "4px",
  marginLeft: "10px",
};

const addButtonStyle = {
  cursor: "pointer",
  background: "#333",
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: "4px",
  marginLeft: "10px",
};

export default ProductModal;
