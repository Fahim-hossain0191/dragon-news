import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format, compareAsc } from "date-fns";
const Header = () => {
    return (
        <div className='text-center py-8 space-y-8'>
            <Image src={logo} alt="photo" width={300} height={200} className='mx-auto'></Image>
            <p></p>
            <p>{format(new Date(), "EEEE,MMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;