//Assets/Styles
import "./InventoryItemDetails.scss";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
//Components
import Button from "../Button/Button";

export default function InventoryItemDetails() {
	return (
		<div className='item-card__header'>
			<div>
				<Button
					className='button__back'
					type=''
					text=''
					txtClassName=''
				/>

				<h1 className='item-card__item-name'>
					{item.name}
				</h1>

				<Button
					className='button__edit'
					type=''
					text=''
					txtClassName=''
				/>
			</div>
		</div>
	);
}
