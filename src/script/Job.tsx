import React from 'react'
import styled, {keyframes} from 'styled-components';
import { devices } from '../style/breakpoints';

const Container = styled.div<{$odd: boolean}>`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: "Poppins";
    flex-direction: column;

    @media only screen and (${devices.md}) {
        flex-direction: row;
        justify-content: ${({$odd}) => $odd ? "flex-end" : "flex-start"};
    }  
`

const Title = styled.h4`
    font-size: 1rem;
    font-weight: 600;
`

const Subtitle = styled.h5`
    margin-top: 0.25rem;
    font-weight: 300;
`

const Text = styled.div<{$odd: boolean}>`
    order : 0;
    text-align: center;
    @media only screen and (${devices.md}) {
        order: ${({$odd}) => $odd ? -1 : 0};
        text-align: ${({$odd}) => $odd ? "right" : "left"};
    }  
`

const Logo = styled.div`
    height: 3rem;
    width: 6rem;
    display: flex;
    justify-content: space-around;
`

const Image = styled.img`
    height: 100%;
`

type Props = {
    company: string;
    year: number;
    title: string;
    logo: string;
    odd: boolean;
}


export const Job: React.FC<Props> = ({
    company,
    year,
    title,
    logo,
    odd
}) => {

    return (
        <Container $odd={odd}>
            <Logo>
                <Image src={logo} alt={company}/>
            </Logo>
            <Text $odd={odd}>
                <Title>{year} - {company}</Title>
                <Subtitle>{title}</Subtitle>
            </Text>
        </Container>
    );
  }