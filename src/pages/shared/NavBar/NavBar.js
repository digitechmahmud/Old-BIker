import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../assets/logo/OldBiker.png';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link className="font-semibold text-accent" to='/home'>Home</Link></li>
        <li><Link className="font-semibold text-accent" to='/blogs'>Blogs</Link></li>
        
        {
            user?.uid ?
                <>
                    <li><Link className="font-semibold text-accent" to="/dashboard">Deshboard</Link></li>
                    <li><Link className="font-semibold text-accent" onClick={handleLogOut}>Sign out</Link></li>
                </>
                :
                <li><Link className="font-semibold text-accent" to='/login'>Login</Link></li>
        }
    </React.Fragment>
    return (
        <div className='mb-10'>
            <div className="navbar fixed w-full z-10 top-0 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn text-xl btn-ghost"><img className='-mt-3' width={80} height={30} src={logo} alt=''/></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div> 
            </div>
        </div>
    );
};

export default NavBar;