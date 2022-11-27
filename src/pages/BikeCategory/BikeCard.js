import React from 'react';

const BikeCard = ({ bike, setBikeOption }) => {
    console.log(bike);
    const { name, location, resalePrice, originalPrice, yearsOfUse, sellerName, description }= bike
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Address: {location}</p>
                <p>Sale Price: ${resalePrice}</p>
                <p>Origianl Price: ${originalPrice}</p>
                <p>Life time use:{yearsOfUse}</p>
                <p>{sellerName}</p>
                <div className="card-actions justify-end">
                    <label onClick={()=>setBikeOption(bike)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;