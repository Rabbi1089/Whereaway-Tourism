import React from 'react';
import Slider from '../component/Slider';
import AllSpot from '../component/AllSpot';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const spot = useLoaderData()
    //console.log(spot.length)
    return (
        <div className='bg-gray-100'>
            <Slider />
            <AllSpot spot={spot}/>
        </div>
    );
};

export default Home;