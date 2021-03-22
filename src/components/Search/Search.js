import React from 'react';
import '../SearchResult/SearchResult.css';

const Search = (props) => {
    const { riderType, img, passanger } = props.rider;
    return (
        <div className="search-rider">
            <div><img src={img} alt="" /></div>
            <div><span>{riderType}</span></div>
            <div><span>{passanger}</span></div>
        </div>
    );
};

export default Search;