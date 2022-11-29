import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://old-biker-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const originalPrice = form.originalPrice.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const picture = form.picture.value;
        const description = form.description.value;
        const address = form.address.value;
        const used = form.used.value;
        
        
        const product = {
            name,
            catId: category,
            resalePrice: price,
            originalPrice,
            sellerName,
            sellerEmail,
            picture,
            location: address,
            description,
            yearsOfUse: used
           
        }

        fetch('https://old-biker-server.vercel.app/bikes', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Success fully posted');
            })
        
    }
    return (
        <div>
            <div className="card-body w-2/3 mx-auto">
                <form onSubmit={handleAddProduct}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Product name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <select name='category' className="select select-bordered w-full input-bordered input-info">

                            {
                                categories.map((category, i) => <option key={i} value={category.catId}>{category.catId}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input type="text" name="originalPrice" placeholder="price" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="sellerEmail" defaultValue={user?.email} placeholder="Email" className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Product Photo</span>
                        </label>
                        <input type="text" name="picture" placeholder="Service Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Years of Use</span>
                        </label>
                        <input type="text" name="used" placeholder="Year of use" className="input input-bordered" required />
                    </div>
                    <textarea className="textarea textarea-primary textarea-bordered h-24 w-full" name="description" placeholder="Product Details" required></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-1/3">Add Service</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;