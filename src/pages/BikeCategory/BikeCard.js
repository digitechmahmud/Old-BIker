import React from 'react';

const BikeCard = ({bike, setBikeOption}) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bike.name}</h2>
                <p>{bike.description}</p>
                <div className="card-actions justify-end">
                    <label onClick={()=>setBikeOption(bike)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;