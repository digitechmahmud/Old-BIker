import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BikeCategory = () => {
    const bikes = useLoaderData();
    console.log(bikes)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                bikes.map(bike => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{bike.name}</h2>
                        <p>{bike.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default BikeCategory;