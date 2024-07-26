import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Button from "./components/Button/Button.jsx";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Button
        type="button"
        text="Edit"
        className="btn--prim btn--edit"
        txtClassName="btn__txt--edit"
      />
      <Button type="button" text="+ Add item" className="btn--sec" />
      <Button type="button" text="Delete" className="btn--del" />
      <Routes>
        <Route path="/warehouses" element={<WarehousesPage />} />
        <Route path="/" element={<Navigate to="/warehouses" />} />
        <Route path="/warehouses/:id" element={<WarehousesPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
