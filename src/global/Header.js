import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import User from './User'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    border-style: solid;
    margin: 1em;

    @media screen and (max-width: 700px){
        font-size: 60%;
    }
`;

const Menuicon = styled.i`
    font-size: 3em;
    width: 1em;
    height: 1em;
    margin: 0.3em;
    margin-left: 0.5em;
    padding: 0;
    background-color: #b3b3b3;

    a:visited{
        color: #575757;
    }

    @media screen and (max-width: 700px){
        font-size: 2em;
    }
`;

const Title = styled.h2`
    margin-left: 1em;
`;

const Nav = styled.nav`
    display: flex;
    height: 3em;
    overflow: auto;

    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        margin: 0;
        align-items: center;
        margin-left: 2em;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 5em;
        height: auto;
        padding: 0.3em;
        margin: 0.7em;
    }

    @media screen and (max-width: 700px){
        font-size: 60%;
    }
`;

const Styleduser = styled.div`
    margin-left: auto;
    margin-right: 1em;
`;

const Header = ({ activePage }) => {

    const menu = ['Dashboard', 'Management', 'Picking', 'Packing']
    return (
        <StyledHeader>
            <Title>{activePage}</Title>
            <Nav>
                <ul>
                    {menu.map(item => {
                        if (item != activePage) {
                            return <li key={item}>{item}</li>
                        }
                    })}
                </ul>
            </Nav>
            <Styleduser><User /></Styleduser>
        </StyledHeader>
    )
}

export default Header