import React from 'react'
import styled, {keyframes} from 'styled-components';
import { devices } from '../style/breakpoints';

const Container = styled.nav`
    padding: 1rem;
    position: fixed;
    display: flex;
    gap: 1rem;
    top: 0;
    left: 50%;
    translate: -50% 0;
    z-index: 10;
    background: #ffffff;
    border-radius: 0 0 0.4rem 0.4rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);


    @media only screen and (${devices.md}) {
        translate: 0;
        right: 0;
        left: initial;
        top: 1rem;
        border-radius: 0.4rem 0 0 0.4rem;

        /* background: none; */
    }
    
`

const Link = styled.a`
    color: #55565B;
    font-size: 1.25rem;
    &:hover {
        color: #A9C191;
    }
`

export const Menu = () => {

    return (
        <Container>
            <Link className="home__link" href="mailto:sonda.yip@gmail.com">
                <i className="far fa-envelope"></i>
            </Link>
            <Link className="home__link" target="_blank" href="https://www.linkedin.com/in/sonda-yip/">
                <i className="fab fa-linkedin"></i>
            </Link>
            <Link className="home__link" target="_blank" href="https://github.com/yipsun">
                <i className="fab fa-github"></i>
            </Link>
            <Link className="home__link" target="_blank" href="https://codepen.io/yipsun/">
                <i className="fab fa-codepen"></i>
            </Link>
        </Container>
    );
  }