import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);

    const {data:myOrders = [], refetch } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);
            const data = await res.json();
            return data;
            
        }
    })
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    console.log(myOrders);
    return (
        <div className='mt-20'>
            <h2 className='font-bold text-2xl'>My Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(myOrder => <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img width={40} height={30} src={myOrder.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"></div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myOrder.product}
                                    <br />
                                    
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)    
                       }
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyOrders;