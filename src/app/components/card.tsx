import Image from "next/image";
import React, { useContext, useState } from "react";
import "./cardStyles.scss";
import { Context } from "../context";
import { Product, ProductAdd } from "../interfaces";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Card = (item: Product) => {
  const context = useContext(Context);
  const [open, setOpen] = useState<boolean>(false);
  

  if (!context) {
    throw new Error("Card must be used within a AuthProvider");
  }
  const { cartItems, setCartItems } = context;

  const handlesetItemCard = () => {
    const findItem = cartItems.find((itemCart) => itemCart.id === item.id);
    if (findItem) {
      setOpen(true);
    } else {
      let newItem: ProductAdd = {
        ...item,
        quantity: 1,
        total: parseFloat(item.price),
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <div className="prodCardContainer">
      <div className="imgContainer">
        <div className="imgProduct">
          <Image src={item.photo} alt="Produto" fill />
        </div>
      </div>
      <div className="prodName">
        <p className="nameText">{item.name}</p>
        <div className="prodPrice">
          <p>{item.price}</p>
        </div>
      </div>
      <p className="prodDescription">{item.description}</p>
      <button onClick={() => handlesetItemCard()} className="cardButton">
        <ShoppingBagIcon sx={{fontSize:'18px'}} /> COMPRAR
      </button>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Esse produto já foi adicionado ao carrinho!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Card;
