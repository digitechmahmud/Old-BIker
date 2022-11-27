import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar/NavBar';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-10">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side mt-5">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/allbuyers">All Buyers</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;