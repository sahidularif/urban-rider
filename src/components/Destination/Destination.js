// import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './Destination.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import fakeRiders from "../fakeRidersData/fakeRidersData";
import Search from '../Search/Search';


const Destination = () => {
    const { id } = useParams();
    console.log('type=', id)
    const { register, watch, errors } = useForm();
    const [hidden, setHidden] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const selectedRiders = fakeRiders.filter(rider => rider.id == id);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFrom(e.target.from.value)
        setTo(e.target.to.value)
        setHidden(!hidden);   
    };

    return (
        <div>
            <Header></Header>
            <div className="body">
                <div className="root-path">
                    <div hidden={!hidden}>
                        <p style={{ fontSize: '25px' }}>{from} &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faGripLines} /> &nbsp;&nbsp;&nbsp;&nbsp;{to}</p>
                    </div>
                    <div hidden={!hidden}>
                        {

                            selectedRiders.map(rider => <Search rider={rider}></Search>)

                        }
                    </div>
                </div>
                <div className="searcha-area">
                    <div hidden={hidden}>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="date-input">Origin</label>
                            <input name="from" defaultValue="Feni" />
                            <label htmlFor="date-input">Destination</label>
                            <input name="to" defaultValue="Dhaka" />
                            <div className="input-group">
                                <label htmlFor="date-input">Depart date</label>
                                <input name="exampleRequired" type="date" />
                                <label htmlFor="date-input">Return date</label>
                                <input name="exampleRequired" type="date" />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="submit" picFrom={from} value="Search" pickTo={to} />
                        </form>
                    </div>

                </div>
                <div className="map-area">
                    {/* <GoogleMap></GoogleMap>     */}

                </div>
            </div>

        </div>
    );
};

export default Destination;