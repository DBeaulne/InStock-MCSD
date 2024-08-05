import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage.js";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails.jsx";
import "./App.scss";

export const apiUrl = process.env.REACT_APP_API_BASE_URL;

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className='instock__background'>
				<Routes>
					<Route
						path='/warehouses'
						element={<WarehousesPage />}
					/>
					<Route
						path='/'
						element={<Navigate to='/warehouses' />}
					/>
					<Route
						path='/warehouses/:id'
						element={<WarehouseDetails />}
					/>
					<Route
						path='/inventory'
						element={<InventoryPage />}
					/>
					<Route
						path='/inventory/:id'
						element={<ItemDetailsPage />}
					/>
					<Route
						path='*'
						element={<NotFoundPage />}
					/>
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
