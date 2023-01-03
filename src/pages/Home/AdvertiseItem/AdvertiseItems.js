import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdvertiseItems = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const {data:bikes = [] } = useQuery({
        queryKey: ['bikes'],
        queryFn: async () => {
            const res = await fetch('https://old-biker-server.vercel.app/bike/true');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mt-5 mb-5 mx-10' data-aos='fade-down'>
            <h2 className='font-bold text-3xl text-center mb-10'>Advertise Items Here</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' data-aos='fade-right'>
                {
                    bikes.map(bike => <div className="card card-side bg-base-100 shadow-xl border-l-2">
                        <figure>
                            <img className='rounded-xl' width={200} height={40} src={bike.picture} alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{bike.name}</h2>
                            <p>{bike.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/category/${bike.catId}`}><button className="btn btn-primary">Book Now</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;