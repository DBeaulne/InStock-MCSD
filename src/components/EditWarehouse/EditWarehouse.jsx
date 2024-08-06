//Imports:
import axios from "axios";
import "./EditWarehouse.scss";
import { apiUrl } from "../../App";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Assets:
import errorIcon from "../../assets/icons/error-24px.svg";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
//Components:
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function EditWarehouse() {
	//enable navigation:
	const navigate = useNavigate();

  //grab warehouse id:
  const { id } = useParams();

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

  //unpack form values:
  const { warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email } = formData;

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

  //form submission handler:
  	const handleSubmit = async event => {
      //prevent default actions:
      event.preventDefault();

      //check for input values:
		  const newErrors = {
			  //'newErrors' is true if value is empty:
			  warehouse_name: !values.warehouse_name,
		    address: !values.address,
		    city: !values.city,
		    country: !values.country,
		    contact_name: !values.contact_name,
		    contact_position: !values.contact_position,
		    contact_phone: !values.contact_phone,
		    contact_email: !values.contact_email,
		  };

      //log any errors in state:
		  setErrors(newErrors);

      //if there are no errors, continue:
      if (!newErrors) {
        //confirm that the user wants to make the changes:
        const confirmSubmit = window.confirm("Make these changes to the current warehouse?");
      }

      //if changes are accepted, navigate back to warehouse list:
      if (confirmSubmit) {
        navigate(`/warehouses`);
      }
      
      try {
        await axios
          //make changes to database entry:
          .put(`${apiUrl}/warehouses/${id}`, formData)
          //revert form data:
          .then(() => {
            setFormData({
              warehouse_name: "",
              address: "",
              city: "",
              country: "",
              contact_name: "",
              contact_position: "",
              contact_phone: "",
              contact_email: "",
            });
          });

      } catch (error) {
        console.log("Encountered an error while attempting to edit the warehouse:", error.message);
      }
	};

  //discard-changes handler:
  const handleDiscardChanges = async () => {
		const cancelConfirmation = window.confirm(
			"Discard changes to the current warehouse?"
		);
		if (cancelConfirmation) {
			navigate(`/warehouses`);
		}
	};

  return ();
}
