import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

    const [isOpenSideBarVal, setisOpenSideBarVal] = useState(false);
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' 
                                    onClick={()=>setisOpenSideBarVal(!isOpenSideBarVal)}>
                                <span className='icon1 mr-2'><IoIosMenu /></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>

                            <div className={`sideBarNav shadow ${isOpenSideBarVal===true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Men <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>Clothing</Button></Link>
                                            <Link to="/"><Button>Footwear</Button></Link>
                                            <Link to="/"><Button>Watches</Button></Link>
                                            <Link to="/"><Button>Fashion</Button></Link>
                                            <Link to="/"><Button>Goggles </Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Women <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>Clothing</Button></Link>
                                            <Link to="/"><Button>Footwear</Button></Link>
                                            <Link to="/"><Button>Watches</Button></Link>
                                            <Link to="/"><Button>Fashion</Button></Link>
                                            <Link to="/"><Button>Beauty & Cosmetic</Button></Link>
                                            <Link to="/"><Button>Goggles</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Kids <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>Clothing</Button></Link>
                                            <Link to="/"><Button>Footwear</Button></Link>
                                            <Link to="/"><Button>Dry Fruits </Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Gifts</Button></Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    
                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline'>

                            <li className='list-inline-item'>
                                <Link to="/"><Button>Home</Button></Link>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/fashion"><Button>Men</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/women"><Button>Women</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/kids"><Button>Kids</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/beauty"><Button>Beauty</Button></Link>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/watches"><Button>Watches</Button></Link>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/gifts"><Button>Gifts</Button></Link>
                            </li>
                            
                            <li className='list-inline-item'>
                                <Link to="/blog"><Button>Blog</Button></Link>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/contact"><Button>Contact</Button></Link>
                            </li>

                            <li className='list-inline-item'>
                                <Link to="/about"><Button>About Us</Button></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;