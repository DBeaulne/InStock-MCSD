//Imports:
import axios from "axios";
import "./EditWarehouse.scss";
import { apiUrl } from "../../App";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Assets:
import errorIcon from "../../assets/icons/error-24px.svg";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
//Components:
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function EditWarehouse() {
	//enable navigation:
	const navigate = useNavigate();

	//grab data from form and set to state:
	const [formData, setFormData] = useState({
		warehouse_name: "",
		address: "",
		city: "",
		country: "",
		contact_name: "",
		contact_position: "",
		contact_phone: "",
		contact_email: "",
	});

	//track any input errors:
	const [errors, setErrors] = useState({
		warehouse_name: false,
		address: false,
		city: false,
		country: false,
		contact_name: false,
		contact_position: false,
		contact_phone: false,
		contact_email: false,
	});

	//input handler:
	const handleInputChange = event => {
		const { name, value } = event.target;
		//spread values back into state, changing only the modified value:
		setValues({
			...values,
			[name]: value,
		});

		//clear error state when user starts typing:
		setErrors({
			...errors,
			[name]: false,
		});
	};
}
