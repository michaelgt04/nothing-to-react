import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <ContentWrapper />
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`
//background: linear-gradient(180deg, #FFFFF3 0%, #FFFFF3 16%, rgba(255, 255, 243, 0.85) 35.57%, rgba(255, 255, 243, 0.83) 54%, rgba(255, 255, 243, 0) 100%);

const ContentWrapper = styled.div`
  padding: 1rem 2rem;
`

export default Header
