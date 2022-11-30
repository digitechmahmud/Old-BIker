import React from 'react';
import AdvertiseItems from './AdvertiseItem/AdvertiseItems';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import OurService from './OurService/OurService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <Categories></Categories>
            <OurService></OurService>
            
        </div>
    );
};

export default Home;