
import React, { useState } from 'react';
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://sleepy-stream-24451.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log('data modified',data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            {/* <form onSubmit={handleAdminSubmit}>
                <InputGroup.Text
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form> */}
            <Form className="d-flex" onSubmit={handleAdminSubmit}>
                <FormControl
                    type="search"
                    placeholder="Email Address"
                    className="me-2"
                    aria-label="Search"
                    id='search-box'
                    onBlur={handleOnBlur}
                />
                <Button type="submit" variant="outline-success">Make Admin</Button>
            </Form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
           

            
        </div>
    );
};

export default MakeAdmin;