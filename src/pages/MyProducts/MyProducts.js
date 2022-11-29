import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const [deleteProduct, setDeleteProduct] = useState([]);

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bikes/${user?.email}`);
            const data = await res.json();
            return data;

        }
    })
    const handleAdProduct = id => {
        fetch(`http://localhost:5000/bikes/${id}`, {
            method:"PUT"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully advertise activated');
                    refetch();
                }
            })
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/bikes/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Successfully Deleted');
                        const remaining = myProducts.filter(mp => mp._id !== id);
                        setDeleteProduct(remaining);
                        refetch();
                    }
                })
        }
    }

    
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    console.log(myProducts);
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
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map(product => <tr key={product._id}>
                                <th>
                                    <label>
                                        <button onClick={()=>handleDelete(product._id)}>X</button>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img width={40} height={30} src={product.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {product.name}
                                    <br />

                                </td>
                                <td>{product.resalePrice}</td>
                                <th>
                                    {
                                        product?.ad !== 'true' && <button onClick={()=>handleAdProduct(product._id)} className="btn btn-ghost btn-xs">Active</button>
                                    }
                                    
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
            <Toaster/>
        </div>
    );
};

export default MyProducts;