import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const IndexPage = () => (
  <ContentWrapper>
    <h1>Nothing to React</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </ContentWrapper>
)

const ContentWrapper = styled.div`
  width: 500px;

  @media (min-width: 800px) {
    width: 740px;
  }
`

export default IndexPage
