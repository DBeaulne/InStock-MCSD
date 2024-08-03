import './SearchBar.scss';
import { useState } from "react";

const SearchBar = ({classname, placeholder, name, value}) => {
   
   const [focus, setFocus] = useState('');
   const [error, setError] = useState('');

   const onInvalid = () => {
      setError('warehouses__form-input--error')
      setFocus('')
   }

   const onFocus = () => {
      setFocus('warehouses__form-input--active')
   }

   const onBlur = () => {
      setFocus('')
      setError('')
   }

 return (
   <input onInvalid={onInvalid} onFocus={onFocus} onBlur={onBlur} required value={value} className={`site_input--default ${classname} ${focus} ${error}`} placeholder={placeholder} type="text" name={name} />
)

}

export default SearchBar;