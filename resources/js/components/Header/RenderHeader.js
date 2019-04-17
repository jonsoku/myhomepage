import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/Style/Container';

const Wrapper = styled.div``;

const BugerBox = styled.div`
    position: absolute;
    left: 1rem;
    top: 1rem;
    z-index: 999;
`;

const Buger = styled.div`
    position: relative;
    display: inline-block;
    width: 2.4rem;
    height: 3rem;
    cursor: pointer;
    span {
        &:nth-of-type(1) {
            top: ${props => (props.toggle ? '0.8rem' : '0rem')};
            transform: ${props => props.toggle && 'rotate(405deg)'};
            background-color: ${props => props.toggle && 'white'};
        }
        &:nth-of-type(2) {
            top: 0.8rem;
            opacity: ${props => (props.toggle ? '0' : '1')};
            background-color: ${props => props.toggle && 'white'};
        }
        &:nth-of-type(3) {
            top: ${props => (props.toggle ? '0.8rem' : '1.6rem')};
            transform: ${props => props.toggle && 'rotate(-405deg)'};
            background-color: ${props => props.toggle && 'white'};
        }
    }
`;

const Line = styled.span`
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    margin: 3px 0;
    border-radius: 10rem;
    transition: all 0.5s ease;
    background-color: black;
`;

const MenuBox = styled.div`
    background: black;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: ${props => (props.toggle ? '15rem;' : '0')};
`;

const Menu = styled.ul`
    text-align: center;
    margin-top: 2rem;
    li {
        margin: 5rem 0;
    }
`;
const LogoBox = styled.div`
    text-align: center;
    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin: 2rem;
    }
    ul {
        overflow: hidden;
        li {
            a {
                float: left;
                width: 20%;
                display: block;
                height: 3rem;
                line-height: 3rem;
            }
        }
    }
`;
const RenderHeader = ({ handleToggle, toggle }) => {
    return (
        <>
            <Wrapper>
                <BugerBox>
                    <Buger onClick={() => handleToggle()} toggle={toggle}>
                        <Line />
                        <Line />
                        <Line />
                    </Buger>
                </BugerBox>

                <MenuBox toggle={toggle}>
                    <Menu>
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/board'>BOARD</Link>
                        </li>
                        <li>
                            <Link to='/board'>BOARD</Link>
                        </li>
                        <li>
                            <Link to='/board'>BOARD</Link>
                        </li>
                        <li>
                            <Link to='/board'>BOARD</Link>
                        </li>
                    </Menu>
                </MenuBox>
                <LogoBox>
                    <h1>LOGO</h1>
                    <Container>
                        <ul>
                            <li>
                                <Link to='#'>mENU</Link>
                            </li>
                            <li>
                                <Link to='#'>mENU</Link>
                            </li>
                            <li>
                                <Link to='#'>mENU</Link>
                            </li>
                            <li>
                                <Link to='#'>mENU</Link>
                            </li>
                            <li>
                                <Link to='#'>mENU</Link>
                            </li>
                        </ul>
                    </Container>
                </LogoBox>
            </Wrapper>
        </>
    );
};

export default RenderHeader;
