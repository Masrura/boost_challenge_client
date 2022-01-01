import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ReactStars from "react-rating-stars-component";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { mId } = useParams();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://damp-gorge-65015.herokuapp.com/movie/${mId}`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [mId]);
    const handleClick = () => {
        const movieTowatch = {
            user: user.email,
            movieId: movie._id
        }
        fetch("https://damp-gorge-65015.herokuapp.com/watchlist", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(movieTowatch),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Added To Watchlist');
                }
            });

    }
    return (
        <Card>
            <Card.Img variant="top" src={movie.Poster} style={{ marginLeft: 'auto', marginRight: 'auto', height: '400px', width: '800px' }} />
            <Card.Body>
                <Card.Text><b>Year: </b>{movie.Year}</Card.Text>
                <Card.Text><b>Plot: </b>{movie.Plot}</Card.Text>
                <Card.Text><b>Cast: </b>{movie.Actors}</Card.Text>
                <Card.Text><b>Director: </b>{movie.Director}</Card.Text>
                <Card.Text><b>Genre: </b>{movie.Genre}</Card.Text>
                <Card.Text><b>Duration: </b>{movie.Runtime}</Card.Text>
                <Card.Text><b>Awards: </b>{movie.Awards}</Card.Text>
                <Card.Text><b>Rating: </b>{movie.imdbRating}</Card.Text>
                <Card.Text>
                    <div style={{marginLeft:'47%'}}>
                        <ReactStars
                            count={5}
                            value={movie.imdbRating / 2}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                </Card.Text>
                <Button variant="success" onClick={handleClick}><b>Add To Watchlist </b>  <i className="far fa-lg fa-plus-square"></i></Button>{' '}
            </Card.Body>
        </Card>
    );
};

export default MovieDetails;