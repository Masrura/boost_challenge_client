import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form, FormControl, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';
import MovieApi from '../MovieApi/MovieApi';

const AddMovies = () => {
   // const [searchMovies, setSearchMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState({});
    let searchText;
    let search = false;

    
    const handleSearch = event => {
        searchText = event.target.value;
       
    }
    const handleClick = () => {
        console.log('search text is', searchText);
        fetch(`https://www.omdbapi.com/?t=${searchText}&apikey=9946028`)
            .then(res => res.json())
            .then(data => {
                console.log('data is', data)
                setSearchedMovies(data);
                console.log('searchedMovies is', searchedMovies);
                search = true;
            })
    }
   
    return (
        <div className='container'>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search by Title (example: coco)"
                    className="me-2"
                    aria-label="Search"
                    id='search-box'
                    onChange={handleSearch}
                />
                <Button onClick={handleClick} variant="outline-success">Search</Button>
            </Form>
            {
                Object.keys(searchedMovies).length !== 0 && <Row xs={1} md={3}>
                    <MovieApi key={searchedMovies._id} movie={searchedMovies} location='addmovies'></MovieApi>
                </Row>
            }
        </div>
    );
};

export default AddMovies;