import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    margin: 2rem 0;
    text-align: center;
    h1 {
        background: pink;
        padding: 1rem 3rem;
        display: inline-block;
    }
`;

const RenderLogo = () => {
    return (
        <Logo>
            <h1>LOGO</h1>
        </Logo>
    );
};

export default RenderLogo;
