import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/header'
import Subscribe from '../components/subscribe'
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Courier';
    src: url('../static/font/courier1.ttf');
  }
  /* @font-face {
    font-family: 'Roboto-Regular';
    src: url('../static/font/roboto_regular.ttf');
  } */

  `
const BodyBackground = styled.body`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <BodyBackground>
      <Header />
      <Subscribe />
    </BodyBackground>
  </>
)

export default IndexPage
