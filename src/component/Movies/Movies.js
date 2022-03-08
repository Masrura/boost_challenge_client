import React, { useState, useEffect } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-stream-24451.herokuapp.com/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <Row xs={1} md={3} >
            {movies.map(movie => <Movie key={movie._id} movie={movie} location='home'></Movie>)}
        </Row>
    );
};

export default Movies;