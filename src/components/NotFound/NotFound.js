import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="not-match">
           <div className="text">
           <h1>404</h1>
            <h3>File not found</h3>

            <p>The site configured at this address does not contain the requested file.</p>

            <p>If this is your site, make sure that the filename case matches the URL.
For root URLs (like http://example.com/) you must provide an index.html file.</p>
<Link to="/home"><Button>Back to homepage</Button></Link>
           </div>
        </div>
    );
};

export default NotFound;