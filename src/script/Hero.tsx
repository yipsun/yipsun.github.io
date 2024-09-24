import React from 'react'
import styled, {keyframes} from 'styled-components';
import { devices } from '../style/breakpoints';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    translate: 0 2rem;
  }
  100% {
    opacity: 1;
    translate: 0 0;
  }
`

const floating = keyframes`
    0% { 
        transform: translate(0,  0px); 
    }
    50%  { 
        transform: translate(0, 0.5rem);
        opacity: 0.5;
    }
    100%   { 
        transform: translate(0, 0px); 
    } 
`

const Section = styled.section`
    position: relative;
    min-height: 100dvh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &:after {
        content: "";
        width: 100%;
        height: 10rem;
        background: linear-gradient(transparent 0%, #ffffff 100%);
        position: absolute;
        bottom: 0;
    }
`

const Portait = styled.img`
    display: block;
    width:  100%;
    max-width: 15rem;
    margin: 0 auto;
    animation: 1.5s ${fadeIn} ease-out;
    @media only screen and (${devices.md}) {
        margin: 0;
    }
`

const Name = styled.h1`
    font-weight: 900;
    font-size: 1.5rem;
    color: #A9C191;
    @media only screen and (${devices.sm}) {
        font-size: 3rem;
    }
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    color: #75767B;
    @media only screen and (${devices.sm}) {
        font-size: 1.5rem;
        margin-top: 0.5rem;

    }
`

const Info = styled.div`
	font-family: "Josefin Sans", sans-serif;
    margin-top: 1rem;
    text-align: center;
    @media only screen and (${devices.md}) {
        text-align: left;
    }
`

const Scroll = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 3rem;
    left: 50%;
    translate: -50% 0;
    animation: 5s ${floating} ease-in-out infinite;

    &:after  {
        --s: 8px; /* control the shape (can be percentage) */
        content: "";
        display: block;
        margin: 0 auto;
        width: 2rem;
        aspect-ratio: 5/3;
        clip-path: polygon(0 0,0 var(--s),50% 100%,100% var(--s),100% 0,50% calc(100% - var(--s)));
        background: #75767B99;
    }
`

const Figure = styled.div`
    @media only screen and (${devices.md}) {
        display: flex;
        align-items: center;
    }
`

const logo = new URL('../img/portrait.png', import.meta.url);


export const Hero = () => {

    return (
    <Section>
        <Figure>
            <Portait src={logo.pathname} />
            <Info>
                <Name>SONDA YIP</Name>
                <Title>FRONT-END DEVELOPER</Title>
            </Info>
        </Figure>
        <Scroll/>
    </Section>
    );
  }