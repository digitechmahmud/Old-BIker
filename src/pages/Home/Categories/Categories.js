import React, { createFactory, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        fetch('https://old-biker-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    },[])
    
    return (
        <div className='mt-20 mb-20'>
            <div>
                <h2 className='text-3xl text-center font-semibold mb-5'>Choose Your Best Brand Category</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        categories.map(category => <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="">
                                <img width={200} height={150} src={category.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{category.name}</h2>
                                <div className="card-actions">
                                    <Link to={`/category/${category.catId}`}><button className="btn btn-primary">See more</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;