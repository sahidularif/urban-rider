import React, { useEffect, useState } from 'react';
import Rider from '../Rider/Rider';
import './CardRiders.css';
import fakeRiderType from '../fakeRidersData/fakeRiderType';

const CardRiders = () => {
    const [riders, setRiders] = useState([]);
    useEffect(() => {
        setRiders(fakeRiderType);
    }, [])
    console.log(riders);
    return (
        <div>
            <div className="card-container">
            <div className="card-riders">
            {
                riders.map(rider => <Rider destiniton={rider}></Rider>)
            }
        </div>
       </div>
        </div>
    );
};

export default CardRiders;