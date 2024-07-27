//Assets/Styles
import "./InventoryItemDetails.scss";
import backArrow from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

export default function InventoryItemDetails() {
	return (
		<div className='item-card__header'>
			<div>
				<button>
					<img
						src={backArrow}
						alt='an arrow indicating back'
					/>
				</button>{" "}
				<h1 className='item-card__item-name'>
					{item.name}
				</h1>
				<button>
					<img
						src={editIcon}
						alt='a simple image of a pencil'
					/>
				</button>
			</div>
		</div>
	);
}
