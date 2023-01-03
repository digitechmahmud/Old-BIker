import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import background from '../../../assets/others/section.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurService = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="hero min-h-screen" data-aos='fade-down' style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content" data-aos='fade-bottom'>
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-accent">Hello Old Biker</h1>
                        <h1 className="mb-5 text-3xl font-bold text-accent">We Buy Bikes</h1>
                        <p className="mb-5 text-accent font-bold">Whether you are looking for an upgrade or ready to sell, Used Motorcycle Store is your one-stop-shop for all things two-wheeled! Simply click Cash Offer below, provide your motorcycle details, and get a cash offer in less than 24 hours, shipping included. It’s that easy!</p>
                        <Link to='/dashboard'><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;