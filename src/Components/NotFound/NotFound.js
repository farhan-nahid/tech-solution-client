import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history=useHistory()
    
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Button  variant='danger' className="btn-brand" onClick={()=>history.goBack()}>Go back</Button>
    </div>
    );
};

export default NotFound;