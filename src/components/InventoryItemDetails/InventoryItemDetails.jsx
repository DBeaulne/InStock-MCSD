//Imports
import axios from "axios";
import { apiUrl } from "../../App";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Assets/Styles
import "./InventoryItemDetails.scss";
import editIcon from "../../assets/icons/edit-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
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
	//grab ID from the item details:
	const { warehouse_id } = inventoryItemDetails;

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

	//trigger call for item details once param is available:
	useEffect(() => {
		getItemDetails(id);
	}, [id]);

	//trigger call for warehouse name once warehouse ID is available:
	useEffect(() => {
		getWarehouseName(inventoryItemDetails.warehouse_id);
	}, [setInventoryItemDetails]);

	return (
		<section className='item-details'>
			<div className='item-details__title-container'>
				<img
					className='item-details__back-icon'
					src={backArrow}
					alt='Back Icon'
					onClick={() => {
						navigate(-1);
					}}
				/>

				<h1 className='item-details__heading'>
					{inventoryItemDetails.item_name}
				</h1>

				<Button
					type='button'
					text='Edit'
					className='btn--prim btn--edit'
					txtClassName='btn__txt--edit'
				/>
			</div>

			<div className='item-details__mid'>
				<div className='item-details__mid-container1'>
					<h3 className='item-details__sub-heading'>
						ITEM DESCRIPTION:
					</h3>
					<p className='item-details__txt'>
						{inventoryItemDetails.description}
					</p>

					<div className='item-details__name'>
						<h3 className='item-details__sub-heading'>CATEGORY:</h3>
						<p className='item-details__txt'>
							{inventoryItemDetails.category}
						</p>
					</div>
				</div>

				<div className='item-details__mid-container2'>
					<div className='item-details__info'>
						<h3 className='item-details__sub-heading'>STATUS:</h3>
						<p className='item-details__txt'>
							{inventoryItemDetails.status}
						</p>
					</div>

					<div className='item-details__info'>
						<h3 className='item-details__sub-heading'>QUANTITY:</h3>
						<p className='item-details__txt'>
							{inventoryItemDetails.quantity}
						</p>
					</div>
				</div>

				<div className='item-details__info'>
					<h3 className='item-details__sub-heading'>WAREHOUSE:</h3>
					<p className='item-details__txt'>{warehouseName}</p>
				</div>
			</div>
		</section>
	);
}
