import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Context } from "../context";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CardCart from "./cardCart";
import { ProductAdd } from "../interfaces";
import "./headerStyles.scss";

const Header = () => {
  const context = useContext(Context);
  const [open, setOpen] = useState<boolean>(false);

  if (!context) {
    throw new Error("Card must be used within a AuthProvider");
  }

  const { cartItems } = context;

  const totalSum = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.total,
    0
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#0F52BA",
          position: "fixed",
          top: 0,
          left: 0,
          flexGrow: 1,
          height: "65px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "40px",
                fontWeight: 600,
                lineHeight: "19px",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              MKS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "19px",
                color: "#FFFFFF",
              }}
            >
              Sistemas
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#FFFFFF",
              },
            }}
            startIcon={<ShoppingCartIcon />}
            onClick={() => setOpen(true)}
          >
            {cartItems.length}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: { xs: "330px", md: "486px" },
            backgroundColor: "#0F52BA",
            height: "100%",
            p: 3,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
              height: "55px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "27px",
                fontWeight: 700,
                lineHeight: "32.91px",
                textAlign: "left",
                color: "#FFFFFF",
                width: "180px",
              }}
            >
              Carrinho de compras
            </Typography>
            <CloseIcon
              sx={{
                fontSize: "28px",
                color: "#FFFFFF",
                backgroundColor: "#000000",
                borderRadius: "50%",
                p: "2px",
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            />
          </Box>
          <Box className="boxCart">
            {cartItems.map((item: ProductAdd) => (
              <CardCart key={item.id} {...item} />
            ))}

            <Box className="boxPrice">
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: "15px",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Total:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: "15px",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                R${totalSum.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "#000000",
              height: "97px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              left: 0,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: "15px",
                textAlign: "left",
              }}
            >
              Finalizar compra
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
