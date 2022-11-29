import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);
    const [deleteOrder, setDeleteOrder] = useState([]);

    const {data:myOrders = [], refetch } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);
            const data = await res.json();
            return data;
            
        }
    })
    

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "Delete",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted');
                        const remaining = myOrders.filter(mo => mo._id !== id);
                        setDeleteOrder(remaining);
                    }
                })
            
        }
    }

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
                                    <button>Delete</button>
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
                                        <button onClick={()=>handleDelete(myOrder._id)}>X</button>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img width={40} height={30} src={myOrder.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myOrder.product}
                                    <br />
                                    
                                </td>
                                <td>{myOrder.resalePrice}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Payment</button>
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