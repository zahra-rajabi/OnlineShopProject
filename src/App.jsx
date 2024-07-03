import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import NotFound from "./Pages/NotFound";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductContext from "./Sources/context/ProductContext";
import Layout from "./Layout/Layout";

function App() {
  return (
    <ProductContext>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/Products" replace />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Products/:id" element={<DetailsPage />} />
        </Routes>
      </Layout>
    </ProductContext>
  );
}

export default App;
