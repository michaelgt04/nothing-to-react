import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <ContentWrapper>
      <h3 className="site-title">
        {siteTitle}
      </h3>
    </ContentWrapper>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #d4dadf;
  box-shadow: 0 1px 1px 0 rgba(116, 129, 141, 0.1);

  .site-title {
    margin: 0
  }
`

const ContentWrapper = styled.div`
  padding: 1rem 2rem;
`

export default Header
