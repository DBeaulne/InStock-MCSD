//Imports
import axios from "axios";
import apiUrl from "../../App";
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

	console.log(`${apiUrl}/inventory/${id}`);

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
			setWarehouseName(response.warehouse_name);
		} catch (error) {
			console.log(
				`Error while attempting to get warehouse name: ${error}`
			);
		}
	};

	//trigger trigger call for item details once param is available:
	useEffect(() => {
		getItemDetails(id);
	}, []);

	//trigger call for warehouse name once warehouse ID is available:
	useEffect(() => {
		getWarehouseName(inventoryItemDetails.warehouse_id);
	}, [inventoryItemDetails]);

	return (
		<section className='inventory-item-details'>
			<div className='inventory-item-details__container'>
				<div className='inventory-item-details__top'>
					<img
						className='inventory-item-details__back-icon'
						src={backArrow}
						alt='Back Icon'
						onClick={() => {
							navigate(-1);
						}}
					/>

					<h1 className='inventory-item-details__heading'>
						{inventoryItemDetails.item_name}
					</h1>

					<Button
						type='button'
						text='Edit'
						className='btn--prim btn--edit'
						txtClassName='btn__txt--edit'
					/>
				</div>

				<div className='inventory-item-details__mid'>
					<div className='inventory-item-details__mid-container1'>
						<h3 className='inventory-item-details__sub-heading'>
							ITEM DESCRIPTION:
						</h3>
						<p className='inventory-item-details__txt'>
							{inventoryItemDetails.description}
						</p>
					</div>

					<div className='inventory-item-details__mid-container2'>
						<div className='inventory-item-details__name'>
							<h3 className='inventory-item-details__sub-heading'>
								CATEGORY:
							</h3>
							<p className='inventory-item-details__txt'>
								{inventoryItemDetails.category}
							</p>
						</div>

						<div className='inventory-item-details__info'>
							<h3 className='inventory-item-details__sub-heading'>
								STATUS:
							</h3>
							<p className='inventory-item-details__txt'>
								{inventoryItemDetails.status}
							</p>
						</div>

						<div className='inventory-item-details__info'>
							<h3 className='inventory-item-details__sub-heading'>
								QUANTITY:
							</h3>
							<p className='inventory-item-details__txt'>
								{inventoryItemDetails.quantity}
							</p>
						</div>

						<div className='inventory-item-details__info'>
							<h3 className='inventory-item-details__sub-heading'>
								WAREHOUSE:
							</h3>
							<p className='inventory-item-details__txt'>
								{inventoryItemDetails.warehouse}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
