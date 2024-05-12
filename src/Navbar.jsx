import {Link, Outlet} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/layout">Layout</Link>
                </li>
                <li>
                    <Link to="/aplikasi">Aplikasi</Link>
                </li>
            </ul>
        </nav>


    <Outlet />
        </>

    );
};

export default Navbar;