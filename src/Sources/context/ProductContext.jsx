import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import api from "../config";
const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProduct(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={Product}>
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const ProductList = useContext(ProductContext);
  return ProductList;
};

const useProductDetails = (id) => {
  const products = useProduct();
  const detailproduct = products.find((product) => product.id === id);
  return detailproduct;
};
export { useProduct, useProductDetails };
export default ProductsProvider;
