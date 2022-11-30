import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { AuthContext } from '../../context/AuthProvider';

const Buyers = () => {
    const { user, loading } = useContext(AuthContext);
    const [deletedUser, setDeletedUser] = useState([]);

    const {data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('https://old-biker-server.vercel.app/users/Buyer')
            const data = await res.json();
            return data;
        }
    })
  

    const handleDeleteBuyer = id => {
        const proceed = window.confirm('Are you sure, you want to delete this Buyer');
        if (proceed) {
            fetch(`https://old-biker-server.vercel.app/users/${id}`, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Deleted');
                        const remaining = users.filter(ur => ur._id !== id);
                        setDeletedUser(remaining);
                        refetch();
                    }
                })
        }
        
    }


    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    return (
        <div className='mt-6'>
            <h2 className='text-3xl'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button onClick={()=>handleDeleteBuyer(user._id)} className='btn btn-ghost'>X</button></td>
                            </tr>)
                         }                 
                    </tbody>
                </table>
                <Toaster></Toaster>
            </div>
        </div>
    ); 
};

export default Buyers;