import React from 'react';
import './SingleRider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth, faUserFriends } from '@fortawesome/free-solid-svg-icons';
const SingleRider = (props) => {
    const { img, riderType, passanger } = props.rider;
    return (
        <div className="single-rider">
            <div><img src={img} alt="" />&nbsp;</div>
            <div><span>{riderType}</span>&nbsp;</div>
            <div><span><FontAwesomeIcon icon={faUserFriends} />&nbsp; {passanger}</span></div>
        </div>
    );
};

export default SingleRider;