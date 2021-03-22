import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rider = (props) => {
    const { id, riderType, img } = props.destiniton;
    console.log(riderType);
    return (
        <div>
            <Link to={"/destination/" + id}> <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text>
                        <span> {riderType}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
};

export default Rider;