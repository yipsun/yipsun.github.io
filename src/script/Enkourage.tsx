import React from 'react'
import styled from 'styled-components';
import { devices } from '../style/breakpoints';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 0 3rem;
`

const Title = styled.h5`
	font-family: "Josefin Sans", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 2rem;
    color: #75767B;
    text-align: center;
` 

const BackButton = styled.button`
    font-family: "Poppins";
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;
    transition: translate 0.1s ease-in;

    &:hover {
        translate: -0.15rem 0;
    }
`

const Text = styled.p`
    font-size: 1rem;
    font-family: "Poppins";
    margin: 1rem 0;
`

const Image = styled.img`
    border: 1px solid #eee;
    width: 100%;
`

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
`
const Item = styled.img`
    overflow: hidden;
    flex-basis: 100%;
    object-fit: cover;

    @media only screen and (${devices.md}) {
        flex-basis: calc(50% - 0.5rem);
    }
`

type Props = {
    backHandle : () => void;
}

const styleGuide = new URL('../img/projects/Enkourage/styleGuide.jpg', import.meta.url)
const mockup1 = new URL('../img/projects/Enkourage/mockup1.jpg', import.meta.url)
const mockup2 = new URL('../img/projects/Enkourage/mockup2.jpg', import.meta.url)
const mockup3 = new URL('../img/projects/Enkourage/mockup3.jpg', import.meta.url)
const mockup4 = new URL('../img/projects/Enkourage/mockup4.jpg', import.meta.url)

export const Enkourage: React.FC<Props> = ({
    backHandle = () => {}
}) => {

    return (
        <Container>
            <Title>Enkourage App - Karelab</Title>
            <BackButton onClick={backHandle}><i className="fa fa-chevron-left"></i>back</BackButton>
            <Text> Unfortunately, Karelab no longer exists as an independent entity, having been bought by another company in 2017.</Text>
            <Text> Below is a gallery of photoshop mockups and designs of when the application was still running. </Text>
            <Gallery>
                <Item src={mockup1.href}/>
                <Item src={mockup2.href}/>
                <Item src={mockup3.href}/>
                <Item src={mockup4.href}/>
            </Gallery>
            <Image src={styleGuide.href} alt="style guide enkourage app" />
        </Container>
    );
  }