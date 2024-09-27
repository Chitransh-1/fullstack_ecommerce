import Logo from '../../assets/images/logo.jpg';
import CountryDropdown from '../CountryDropdown/index';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import UserBox from './User';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {

    const context = useContext(MyContext);

    return (
        <div className="headerwrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">
                        Due to the <b>COVID-19</b> epidemic, orders may be processed with a slight delay.
                    </p>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logowrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}>
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>

                        <div className="col-sm-10 d-flex align-items-center part2">
                            {
                                context.countryList.length !== 0 && <CountryDropdown />
                            }
                            <SearchBox />
                            <UserBox />
                        </div>
                    </div>
                </div>
            </header>

            <Navigation />
        </div>
    );
}

export default Header;
