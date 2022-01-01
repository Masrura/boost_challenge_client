import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Movie from '../Movie/Movie';

const Watchlist = () => {
    const [watchlist, setWatchlist] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        const url = `https://damp-gorge-65015.herokuapp.com/watchlist/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setWatchlist(data))
    }, [user.email])
    return (
         <Row xs={1} md={3} >
            {watchlist.map((movie) => <Movie key={movie._id} movie={movie} location = 'watchlist'></Movie>)}
        </Row>
    );
};

export default Watchlist;