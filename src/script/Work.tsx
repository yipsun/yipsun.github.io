import React, { Children } from 'react'
import styled, {keyframes} from 'styled-components';
import { devices } from '../style/breakpoints';

const Container = styled.div``

const Figure = styled.a`
    height: 10rem;
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    margin-bottom: 2rem;
    text-decoration: none;

`

const FigureTitle = styled.span`
    z-index: 1;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: #FFFFFF;
    text-shadow: 0px 0px 5px #000000;
    pointer-events: none;

    @media only screen and (${devices.md}) {
        font-size: 2rem;
    }
`

const Image = styled.div<{$bg: string}>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${({$bg})=> $bg});
    background-size: cover;
    filter: blur(2px) grayscale(100%);
    transition: filter 0.15s ease-out;
    &:hover {
        filter: blur(0.5px) grayscale(0);
    }
`

const Title = styled.h5`
	font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 900;

`

const Separator = styled.div`
    width: 2rem;
    height: 0.25rem;
    background: linear-gradient(to right, #667558 0%, #A9C191 50%);
    margin: 1rem 0;
    border-radius: 1rem;
`

const Description = styled.div`
    font-family: "Poppins";
    font-weight: 300;
    font-size: 1rem;
    & p {
        margin-bottom: 1rem;
        line-height: 1.25rem;
    }
`

type Props = {
    imgSrc: string,
    title: string,
    children: React.ReactElement | string
    link?: string,
    clickHandle?: () => void
}


export const Work: React.FC<Props> = ({
    imgSrc,
    title,
    children,
    link,
    clickHandle = () => {}
}) => {

    return (
        <Container>
            <Figure href={link} target='_blank' onClick={clickHandle} >
                <Image $bg={imgSrc} />
                <FigureTitle>{title}</FigureTitle>
            </Figure>
            <Title>{title}</Title>
            <Separator/>
            <Description>
                {children}
            </Description>
            
        </Container>
    );
  }