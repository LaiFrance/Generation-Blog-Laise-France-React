import { Link } from '@mui/material';
import * as React from 'react';
import BackEnd from '../backEnd/BackEnd';

function FrontEnd() {
    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        margin: '1em',
        padding: '1em',
      };

    return (
        <div>
            <h1>FrontEnd</h1>
            <div style={divStyles}>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>

            </div>
            <Link href="/backEnd" component={BackEnd}></Link>
            <h1>BackEnd</h1>
            <div style={divStyles}>
                <p>NodeJS</p>
                <p>Express</p>
                <p>MySQL</p>
                <p>MongoDB</p>
                <p>Java</p>
                <p>Spring Boot</p>
        </div>
        
        </div>
    );
}



export default FrontEnd;