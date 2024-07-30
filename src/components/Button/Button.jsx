import React from "react";
import "./Button.scss";

const Button = ({ className, type, text, txtClassName, onClick = null }) => {
	return (
		<button
			type={type}
			className={`btn ${className}`}
			onClick={onClick}>
			{/* txtClassName is only for the Edit button to hide the text at mobile
      breakpoint */}
			<span className={`btn__txt ${txtClassName}`}>{text}</span>
		</button>
	);
};

export default Button;
