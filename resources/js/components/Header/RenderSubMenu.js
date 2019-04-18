import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    background: pink;
    height: 100vh;
    transition: all 0.6s ease;
    overflow: hidden;
    width: ${props => (props.toggle ? '40vw' : '0')};
`;

const RenderSubMenu = ({ toggle }) => {
    return (
        <Menu toggle={toggle}>
            <div>
                <div>menu</div>
                <div>menu</div>
                <div>menu</div>
                <div>menu</div>
            </div>
        </Menu>
    );
};

export default RenderSubMenu;
