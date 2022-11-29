import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../Hook/useAdmin';
import useSeller from '../Hook/useSeller';
import NavBar from '../pages/shared/NavBar/NavBar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-10">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side mt-20">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>
                        {
                            isAdmin && <>
                            <li><Link to="/dashboard/buyers">All Buyers</Link></li>
                            <li><Link to="/dashboard/sellers">All Sellers</Link></li></>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;