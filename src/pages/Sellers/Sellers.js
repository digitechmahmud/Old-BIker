import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Sellers = () => {
    const { user, loading } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://old-biker-server.vercel.app/users/Seller')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])
    console.log(users);


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
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button>Verify</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;