import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Header = () => {
    const listItems = ['Home', 'Donation', 'Statistics']
    const listLinks = ['/', '/donation', '/statistics']

    const reloadPage = () =>{
        window.location.reload();
    }

    return (
        <div className="px-5 xl:pt-12 pt-7">
            <div className="navbar max-w-[1400px] m-auto">
                <div className="flex-1">
                    <img onClick={reloadPage} className='md:w-fit sm:w-2/3 w-3/4 cursor-pointer' src={Logo} alt="Logo" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-0 sm:space-x-8 space-x-3">
                        {
                            listItems.map((listItem, index) => (
                                <li key={index}>
                                    <NavLink
                                        className='md:text-lg sm:text-base text-sm text-[#0B0B0B] font-bold hover:bg-transparent hover:underline hover:text-[#FF444A] underline-offset-4 importance p-0'
                                        to={listLinks[index]}
                                    >
                                        {listItem}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;