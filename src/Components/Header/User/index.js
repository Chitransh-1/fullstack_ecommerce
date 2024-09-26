import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";

const UserBox = () => {
    return (
        <div className='part3 d-flex align-items-center ml-auto'>
            <Button className='circle mr-3'>
                <FiUser />
            </Button>
            <div className='ml-auto cartTab d-flex align-items-center'>
                <span className='price'>$3.29</span>
                <div className='position-relative ml-2'>
                    <Button className='circle'>
                        <IoBagOutline />
                    </Button>
                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                </div>
            </div>
        </div>
    );
}

export default UserBox;
