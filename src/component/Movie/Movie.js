import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap';
const Movie = (props) => {
    const { _id, Title, Plot, Poster, imdbRating } = props.movie;
    const { handleDelete } = props;
    const location = props.location;
    console.log('I came from', location);
    return (
        <Col>
            <Link to={`/movie/${_id}`} style={{textDecoration:'none'}}>
            <Card style={{ padding: '3%' }}>
                <Card.Img variant="top" src={Poster} style={{ height:'350px' }}/>
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Plot}
                        </Card.Text>
                </Card.Body>
                    <Card.Footer>
                        <div style={{ display:'flex', marginLeft: '35%' }}>
                            <ReactStars
                                count={5}
                                value={imdbRating / 2}
                                size={24}
                                edit={false}
                                activeColor="#ffd700"
                            /> <span style={{margin:'3%'}}>({imdbRating}/10)</span>
                        </div>
                       
                        
                </Card.Footer>
                </Card>
            </Link>
            {
                location == 'watchlist' &&
                <Button style={{ color: 'white' }}
                    onClick={() => handleDelete(_id)}
                    className="btn bg-danger p-2"
                >
                    Delete
                </Button>


            }
        </Col>
    );
};

export default Movie;