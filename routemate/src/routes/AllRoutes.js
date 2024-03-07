import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductList } from "../pages/ProductList";
import { ProductDetail } from "../pages/ProductDetail";
import { Contact } from "../pages/Contant/Contact";
import { Admin } from "../pages/Admin";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  const user = true;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<Contact />} />
          <Route path="eu" element={<Contact />} />
          <Route path="us" element={<Contact />} />
        </Route>
        <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<PageNotFound title="404" />} />
      </Routes>
    </div>
  );
};
