import React from 'react';
import styled from 'styled-components';
import { RenderSubMenu } from './index';

const Box = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
`;
const Hambuger = styled.div`
    width: 2.2rem;
    height: 1.4rem;
    cursor: pointer;
    span {
        &:nth-of-type(1) {
            top: ${props => (props.toggle ? '0.7rem' : '0rem')};
            transform: ${props => props.toggle && 'rotate(135deg)'};
        }
        &:nth-of-type(2) {
            top: 0.7rem;
            opacity: ${props => props.toggle && '0'};
        }
        &:nth-of-type(3) {
            top: ${props => (props.toggle ? '0.7rem' : '1.4rem')};
            transform: ${props => props.toggle && 'rotate(-135deg)'};
        }
    }
`;
const Line = styled.span`
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    top: 0;
    background: black;
    transition: all 0.4s ease;
`;

const RenderHambuger = ({ handleToggle, toggle, show }) => {
    return (
        <>
            {show ? (
                <Box>
                    <Hambuger onClick={() => handleToggle()} toggle={toggle}>
                        <Line />
                        <Line />
                        <Line />
                    </Hambuger>
                </Box>
            ) : (
                ''
            )}

            {show ? <RenderSubMenu toggle={toggle} /> : ''}
        </>
    );
};

export default RenderHambuger;
