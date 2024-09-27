import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import { useContext, useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [filteredCountryList, setFilteredCountryList]  = useState([]);
    const context = useContext(MyContext);

    const selectCountry = (index) => {
        setSelectedTab(index);
        setIsOpenModal(false);
    };

    useEffect(() => {
        setFilteredCountryList(context.countryList);
    }, [context.countryList]);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword !== "") {
            const filteredList = context.countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });
            setFilteredCountryList(filteredList);
        } else {
            setFilteredCountryList(context.countryList);
        }   
    };

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
                TransitionComponent={Transition}
            >
                <h4 className='mb-0'>Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offers for your area</p>

                <Button className='close_' onClick={() => setIsOpenModal(false)}>
                    <MdClose />
                </Button>

                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area...' onChange={filterList} />
                    <Button><IoSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    {
                        filteredCountryList?.length !== 0 && filteredCountryList?.map((item, index) => (
                            <li key={index}>
                                <Button
                                    onClick={() => selectCountry(index)}
                                    className={`${selectedTab === index ? 'active' : ''}`}
                                >
                                    {item.country}
                                </Button>
                            </li>
                        ))
                    }
                </ul>
            </Dialog>
        </>
    );
}

export default CountryDropdown;