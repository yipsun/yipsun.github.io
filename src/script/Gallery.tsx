import React from 'react'
import styled from 'styled-components';
import { devices } from '../style/breakpoints';
import { Job } from './Job';
import { Work } from './Work';
import { Enkourage } from './Enkourage';


const Section = styled.section`
    padding: 3rem 0;
    background-color: #ffffff;
    background-image: radial-gradient(#A9C191 0.7000000000000001px, #ffffff 0.7000000000000001px);
    background-size: 14px 14px;
    min-height: 100dvh;
`

const Container = styled.div`
    max-width: 1200px;
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    @media only screen and (${devices.md}) {
        flex-direction: row;
        width: 90%;
        flex-wrap: wrap;
    } 

    @media only screen and (${devices.lg}) {
        gap: 2rem;
    } 

    &>* {
        @media only screen and (${devices.md}) {
            flex: 0 0 calc(50% - 1rem);
        }

        @media only screen and (${devices.lg}) {
            flex: 0 0 calc(33.33% - 1.40rem);
        }
    }
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
`;

const enkourage = new URL('../img/projects/enkourage.png', import.meta.url);
const cirque = new URL('../img/projects/cirque.png', import.meta.url);
const flexter = new URL('../img/projects/flexter.png', import.meta.url);

export const Gallery = () => {
    
    const [work, setWork] = React.useState<"enkourage" | null>(null);
    const setWorkEnkourage = () => setWork("enkourage");
    const resetWork = () => setWork(null);

    return (
        <Section id="works">
           <Title>WORKS</Title>
            {
            work === null &&
            <Container>
                <Work
                    clickHandle={setWorkEnkourage}
                    imgSrc={enkourage.href}
                    title="Enkourage"
                >
                    <>
                        <p>The employee and reward recognition web app developed by Karelab. The platform was designed to enhance employee engagement through a recognition and rewards system, with a strong focus on gamification. This solution was successfully deployed at major Canadian corporations, including Desjardins, CGI, and Bell.</p>
                        <p>As the sole front-end developer for the product, I collaborated closely with the designer to bring their vision to life. With my keen interest in design and attention to detail, I had the opportunity to help create the style guide for the application, followed by developing the style system based on our collaboration.</p>
                    </>
                </Work>
                <Work
                    link="https://www.cirquedusoleil.com/"
                    imgSrc={cirque.href}
                    title="Cirque Du Soleil"
                >
                    <>
                        <p>Cirque du Soleil is a Canadian entertainment company, famous for its innovative blend of acrobatics, circus arts, and immersive storytelling.</p>
                        <p> I worked on the main website and landing pages for Cirque du Soleil, focusing on developing reusable components that function seamlessly across various content management systems, including Sitecore and Pardot. While ensuring the quality of the design of the artistic director, my goal was to create customizable components that could be easily integrated into the main CMS, ensuring flexibility and efficiency in content management.</p>
                    </>
                </Work>
                <Work
                    link="https://www.flexter.com/"
                    imgSrc={flexter.href}
                    title="Flexter"
                >
                    <>
                        <p>Flexter is a mobility platform designed specifically for the truck rental industry. It consolidates offers from multiple suppliers, allowing customers to browse various locations from a single platform. Users can compare prices and find the trucks that best meet their needs.</p>
                        <p>
                        At Flexter, I had the opportunity to collaborate closely with the lead designer to improve the existing style guide and to input on various technical challenges we encountered. This collaboration was essential in ensuring that the design choices aligned with technical feasibility. To maintain a consistent user experience and achieve a cohesive look for the web application, I developed the design system using React. </p>
                    </>
                </Work>
            </Container>
            }

            {work === "enkourage" && <Enkourage backHandle={resetWork}/>}

        </Section>
    );
  }