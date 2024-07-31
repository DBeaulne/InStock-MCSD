//Imports
import axios from "axios";
import { apiUrl } from "../../App";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Assets/Styles
import "./InventoryItemDetails.scss";
import editIcon from "../../assets/icons/edit-24px.svg";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
//Components
import Button from "../Button/Button";

export default function InventoryItemDetails() {
	//enable navigation:
	const navigate = useNavigate();
	//hold current item details in state:
	const [inventoryItemDetails, setInventoryItemDetails] = useState([]);
	//get warehouse name using warehouse ID:
	const [warehouseName, setWarehouseName] = useState();
	//grab id from URL params:
	const { id } = useParams();

	//API call for item details:
	const getItemDetails = async id => {
		try {
			const { data } = await axios.get(`${apiUrl}/inventory/${id}`);
			setInventoryItemDetails(data);
		} catch (error) {
			console.log(`Error while attempting to get item details: ${error}`);
		}
	};

	//API call to check warehouse ID against list:
	const getWarehouseName = async warehouse_id => {
		try {
			const response = await axios.get(
				`${apiUrl}/warehouses/${warehouse_id}`
			);
			setWarehouseName(response.data.warehouse_name);
		} catch (error) {
			console.log(
				`Error while attempting to get warehouse name: ${error}`
			);
		}
	};

	//trigger trigger call for item details once param is available:
	useEffect(() => {
		getItemDetails(id);
	}, [id]);

	//trigger call for warehouse name once warehouse ID is available:
	useEffect(() => {
		getWarehouseName(inventoryItemDetails.warehouse_id);
	}, [inventoryItemDetails]);

	return <div></div>;
}
