import React from 'react'
import styled from 'styled-components'
import HomepageImage from '../../images/Homepage.png'
import Filter from '../Filter';

export const Cover = styled.div`
    background-image: url(${HomepageImage});
    background-size: cover;
    margin-top: -50px;
    height: 60rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: 0px -130px;
`

const HeroFrame = () => {
  return (
    <Cover className="hero-frame">
      <h1 className="mb-4 t-text-white t-font-bold t-text-xl sm:t-text-3xl lg:t-text-4xl">EXPLORE ALL BOOKS ON MYLIB</h1>
      <Filter />
    </Cover>
  )
}

export default HeroFrame