import { GetProductsData } from "@/services/apiProducts";
import { Skeleton } from "@mui/material";
import Card from "./components/card";
import "./storeStyles.scss";
import { Product } from "./interfaces";

const Store = () => {
  const { data, isLoading } = GetProductsData();
  const skeletons = Array.from({ length: 8 });
  console.log("data ", data);

  return (
    <div className="productMain">
      <div className="productContainer">
        <div className="productGrid">
          {isLoading
            ? skeletons.map((_, index) => (
                <Skeleton
                  variant="rectangular"
                  key={index}
                  width={218}
                  height={285}
                  sx={{ borderRadius: "10px" }}
                />
              ))
            : data.products.map((item: Product) => (
                <Card key={item.id} {...item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
