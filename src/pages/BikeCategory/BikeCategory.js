import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import BikeCard from './BikeCard';

const BikeCategory = () => {
    const [bikeOption, setBikeOption] = useState(null);
    const bikes = useLoaderData();
    console.log(bikes)

    return (
        <div className='mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    bikes.map(bike => <BikeCard
                        key={bike._id}
                        bike={bike}
                        setBikeOption={setBikeOption}
                    ></BikeCard>)
                }
            </div>
            <div>
                {
                    bikeOption &&
                    <BookingModal
                        bikeOption={bikeOption}
                        setBikeOption={setBikeOption}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default BikeCategory;