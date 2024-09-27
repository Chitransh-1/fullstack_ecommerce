import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <Button className='allCatTab align-items-center'>
                            <span className='icon1 mr-2'><IoIosMenu /></span>
                            <span className="text">ALL CATEGORIES</span>
                            <span className='icon2 ml-2'><FaAngleDown /></span>
                        </Button>
                    </div>
                    
                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                            <li className='list-inline-item'><Link to="/fashion"><Button>Fashion</Button></Link></li>
                            <li className='list-inline-item'><Link to="/electronics"><Button>Electronics</Button></Link></li> 
                            <li className='list-inline-item'><Link to="/bakery"><Button>Bakery</Button></Link></li>
                            <li className='list-inline-item'><Link to="/grocery"><Button>Grocery</Button></Link></li>
                            <li className='list-inline-item'><Link to="/blog"><Button>Blog</Button></Link></li>
                            <li className='list-inline-item'><Link to="/contact"><Button>Contact</Button></Link></li>
                            <li className='list-inline-item'><Link to="/contact"><Button>About US</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
