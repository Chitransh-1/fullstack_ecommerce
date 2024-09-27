import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import React, { useContext, useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const context = useContext(MyContext);

    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                className='locationModel'
                TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose Your Delivery Location</h4>
                <p>Enter Your Address and we will specify the offers for your area</p>

                <Button className='close_' onClick={() => setIsOpenModal(false)}>
                    <MdClose />
                </Button>

                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area...' />
                    <Button><IoSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    {context.countryList?.length !== 0 && context.countryList?.map((item, index) => { 
                        return (
                            <li key={index}> 
                                <Button onClick={() => setIsOpenModal(false)}>India</Button> 
                            </li>
                        );
                    })}
                </ul>
            </Dialog>
        </>
    );
}

export default CountryDropdown;