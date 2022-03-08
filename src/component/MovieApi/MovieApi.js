import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MovieApi = (props) => {
    const { _id, Title, Plot, Poster } = props.movie;
    const location = props.location;
    const handleClick = () => {
       
        fetch("https://sleepy-stream-24451.herokuapp.com/movies", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(props.movie),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Added To Movies');
                }
            });

    }
    return (
        <Col>
            <Card style={{ padding: '3%' }}>
                <Card.Img variant="top" src={Poster} style={{ height: '350px' }} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Plot}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={handleClick}><b>Add To Movies </b>  <i className="far fa-lg fa-plus-square"></i></Button>{' '}
                </Card.Footer>
            </Card>

        </Col>
    );
};

export default MovieApi;