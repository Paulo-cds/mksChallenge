import Image from "next/image";
import React, { useContext, useState } from "react";
import "./cardCartStyles.scss";
import { Context } from "../context";
import { Product, ProductAdd } from "../interfaces";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";

const CardCart = (item: ProductAdd) => {
  const context = useContext(Context);
  const [itemPrice, setItemPrice] = useState<number>(
    item.quantity * parseFloat(item.price)
  );

  if (!context) {
    throw new Error("Card must be used within a AuthProvider");
  }

  const { cartItems, setCartItems } = context;

  const handleRemoveItemCard = () => {
    const findItem = cartItems.filter((itemCart) => itemCart.id !== item.id);
    if (findItem) {
      setCartItems(findItem);
    }
  };

  const addNew = () => {
    const updatedCartItems = cartItems.map((itemMap) =>
      itemMap.id === item.id
        ? {
            ...itemMap,
            quantity: itemMap.quantity + 1,
            total: (itemMap.quantity + 1) * parseFloat(itemMap.price),
          }
        : itemMap
    );
    setCartItems(updatedCartItems);
  };

  const removeNew = () => {
    const updatedCartItems = cartItems.map((itemMap) =>
      itemMap.id === item.id
        ? {
            ...itemMap,
            quantity: itemMap.quantity - 1,
            total: (itemMap.quantity - 1) * parseFloat(itemMap.price),
          }
        : itemMap
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="prodCartContainer">
      <CloseIcon
        sx={{
          fontSize: "16px",
          color: "#FFFFFF",
          backgroundColor: "#000000",
          borderRadius: "50%",
          p: "2px",
          cursor: "pointer",
          position: "absolute",
          top: -5,
          right: -5,
        }}
        onClick={() => handleRemoveItemCard()}
      />
      <div className="imgContainer">
        <Image src={item.photo} alt="Produto" fill />
      </div>
      <p className="nameText">{item.name}</p>
      <div className="qtdContainer">
        <p className="firstQtd">Qtd.</p>
        <div className="qtdBox">
          <p onClick={() => removeNew()}>-</p>
          <hr className="vertical-line" />
          <p>{item.quantity}</p>
          <hr className="vertical-line" />
          <p onClick={() => addNew()}>+</p>
        </div>
      </div>
      <div className="prodPrice">
        <p>{item.total}</p>
      </div>
    </div>
  );
};

export default CardCart;
