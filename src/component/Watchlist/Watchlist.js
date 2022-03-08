import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Movie from '../Movie/Movie';


const Watchlist = () => {
    const [watchlist, setWatchlist] = useState([]);
    const [control, setConrol] = useState(false);
    const { user } = useAuth();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://sleepy-stream-24451.herokuapp.com/deleteMovie/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        console.log('delete Successfull');
                        setConrol(!control);
                    } else {
                        setConrol(false);
                        console.log('delete UnSuccessfull');
                    }
                });
            console.log(id);
        }
    };

    useEffect(() => {
        const url = `https://sleepy-stream-24451.herokuapp.com/watchlist/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setWatchlist(data))
    }, [user.email, control])
    return (
         <Row xs={1} md={3} >
            {watchlist.map((movie) => <Movie key={movie._id} movie={movie} location='watchlist' handleDelete={handleDelete}></Movie>)}
        </Row>
    );
};

export default Watchlist;