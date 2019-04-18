import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 40px;
    align-items: center;
    text-align: center;
`;

const RenderHeader = () => {
    return (
        <Grid>
            <div>
                <Link to='/'>Menu</Link>
            </div>
            <div>
                <Link to='/'>Menu</Link>
            </div>
            <div>
                <Link to='/'>Menu</Link>
            </div>
            <div>
                <Link to='/'>Menu</Link>
            </div>
            <div>
                <Link to='/'>Menu</Link>
            </div>
        </Grid>
    );
};

export default RenderHeader;
