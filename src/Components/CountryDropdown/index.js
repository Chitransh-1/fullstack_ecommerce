import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropdown = () => {
    const [isOpenModal, setisOpenModal] = useState(false);
    return (
        <>
            <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>


            <Dialog 
            open={isOpenModal} 
            onClose={()=>setisOpenModal(false)} 
            className='locationModel'
            TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose Your Delivery Location</h4>
                <p>Enter Your Adress and we will specify the offers for Your Area</p>
                <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose/></Button>


                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area...' />
                    <Button><IoSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Sri Lanka</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Bhutan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Indonesia</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>China</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Bangladesh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Afghanistan</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>israil</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>America</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Landon</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Africa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Australia</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>New York</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>united states</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>united kingdom</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Albania</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Algeria</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Andorra</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Angola</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Antigua and Barbuda</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Argentina</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Spain</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Bangladesh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Uganda</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Ukraine	</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Vanuatu</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Venezuela</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Vietnam</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Yemen</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>New</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Zambia</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Zimbabwe</Button></li>
                </ul>

            </Dialog>
        </>
    )
}

export default CountryDropdown;
