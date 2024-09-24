import React from 'react'
import styled from 'styled-components';
import { devices } from '../style/breakpoints';
import { Job } from './Job';


const Section = styled.section`
    background-color: white;
    padding: 3rem 0;
`

const Title = styled.h3`
	font-family: "Josefin Sans", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 4rem;
    color: #BFDAA4;
    text-align: center;
    @media only screen and (${devices.md}) {
        font-size: 2rem;
    }

    &:before, &:after{
        content: "";
        display: inline-block;
        translate: 0 -0.35rem;
        width: 0.5rem;
        margin: 0 0.5rem;
        border-bottom: 2px solid #BFDAA4;
        @media only screen and (${devices.md}) {
            translate: 0 -0.75rem;
        }
    }
`

const Line = styled.div`
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 0;
    display: flex;
    gap: 2rem;
    flex-direction: column;

    &:after {
        content: '';
        position: absolute;
        width: 0px;
        border-left: 1px dashed #A9C191;
        top: 0;
        bottom: 0;
        left: 3rem;
        @media only screen and (${devices.md}) {
            left: 50%;
        }
    }
    @media only screen and (${devices.sm}) {
            width: 75%;
    }

    @media only screen and (${devices.md}) {
            width: 100%;
    }
`

const Item = styled.div`
    padding: 10px;
    position: relative;
    background-color: inherit;
    width: calc(100% - 7rem);
    border-radius: 1rem;
    left: 5rem;

    &:after {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 0;
        top: 50%;
        translate: calc(-100% - 1.25rem) -50%;
        background-color: #FFFFFF;
        border: 4px solid #A9C191;
        border-radius: 50%;
        z-index: 1;
        
    }

    @media only screen and (${devices.md}) {
        width: 45%;
        left: initial;
    }   

    &:nth-child(even){
        @media only screen and (${devices.md}) {
            left: 55%;
        }  

        &:after {
            @media only screen and (${devices.md}) {
                translate: calc(-100% - 1.7rem) -50%;
            }   
        }

    }

    &:nth-child(odd){
        &:after {
            @media only screen and (${devices.md}) {
                right: 0;
                left: initial;
                translate: calc(100% + 1.7rem) -50%;
            }   
        }
    }
`

const CQ = new URL('../img/company/competencesQuebec.svg', import.meta.url);
const karelab = new URL('../img/company/karelab.webp', import.meta.url);
const cirqueDuSoleil = new URL('../img/company/cirqueDuSoleil.png', import.meta.url);
const worximity = new URL('../img/company/worximity.jpeg', import.meta.url);
const lightspeed = new URL('../img/company/lightspeed.webp', import.meta.url);
const flexter = new URL('../img/company/flexter.png', import.meta.url);

const data = [
    {
        title: "Web developer",
        year: 2012,
        company: "Compétence Québec",
        logo: CQ.href
    },
    {
        title: "Front-end developer",
        year: 2015,
        company: "Karelab",
        logo: karelab.href
    },
    {
        title: "Front-end developer",
        year: 2016,
        company: "Cirque du Soleil",
        logo: cirqueDuSoleil.href
    },
    {
        title: "Front-end developer",
        year: 2018,
        company: "Worximity",
        logo: worximity.href
    },
    {
        title: "Intermediate Front-end developer",
        year: 2019,
        company: "Lightspeed POS",
        logo: lightspeed.href
    },
    {
        title: "Senior Front-end developer",
        year: 2020,
        company: "Flexter",
        logo: flexter.href
    },
]

export const Timeline = () => {

    return (
        <Section>
            <Title>EXPERIENCES</Title>
            <Line>
                {
                    data.map(({
                        title,
                        year,
                        company,
                        logo
                    }, i) => {
                        return (
                            <Item key={`${company}_${year}`}>
                                <Job
                                    title={title}
                                    year={year}
                                    logo={logo}
                                    company={company}
                                    odd={i%2 === 0}
                                />
                            </Item>
                        )
                    })
                }
            </Line>
        </Section>
    );
  }