import React from "react";
import "./WarehouseList.scss";
import Warehouse from "./Warehouse";
import SearchBar from "../SearchBar/SearchBar";

// MAP FUNCTION TO BE ADDED //

const WarehouseList = (warehouse) => {
	let location = "Washington"; // temporary variable, delete once warehouse.map() is ready

	return (
		<>
			<section className="warehouses">
				<div className="warehouses__wrapper">
					<h1 className="warehouses__title">Warehouses</h1>
					<form className="warehouses__form">
						<SearchBar
							classname={"warehouses__form-input"}
							placeholder={"Search..."}
						/>
						<button width="1000px">PLACE HOLDER ONLY</button>
					</form>
				</div>
				{/* {warehouse.map(() => {

      })} */}
				<Warehouse location={location} /* temporary prop */ />
			</section>
		</>
	);
};

export default WarehouseList;
