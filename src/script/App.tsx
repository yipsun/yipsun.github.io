import React from 'react'
import styled from 'styled-components';
import { Hero } from './Hero';
import { Timeline } from './Timeline';
import { Menu } from './Menu';
import { Gallery } from './Gallery';

const Main = styled.main`
  position: relative;
`

export function App() {
    return (
    <Main>
      <Menu/>
      <Hero/>
      <Timeline/>
      <Gallery/>
    </Main>
    )
  }