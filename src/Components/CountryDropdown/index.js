import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import React from 'react'; // Ensure React is imported for JSX to work

const CountryDropdown = () => {
    return (
        <Button className='countryDrop d-flex align-items-center'>
            <div className='info d-flex flex-column'>
                <span className="label">Your Location</span> {/* Corrected "lable" to "label" */}
                <span className="name">India</span>
            </div>
            <span className='ml-auto'>
                <FaAngleDown />
            </span>
        </Button>
    );
}

export default CountryDropdown;
