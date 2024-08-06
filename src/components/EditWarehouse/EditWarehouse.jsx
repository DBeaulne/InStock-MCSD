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
	//grab data from form:
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
}
