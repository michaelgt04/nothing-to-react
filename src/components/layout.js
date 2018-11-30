import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Navbar from './navbar'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutWrapper>
          <NavbarWrapper>
            <Navbar />
          </NavbarWrapper>
          <ContentWrapper>{children}</ContentWrapper>
        </LayoutWrapper>
      </>
    )}
  />
)

const ContentWrapper = styled.div`
  max-width: 1080px;
  margin-left: 5rem;
`

const LayoutWrapper = styled.div`
  display: flex;
`

const NavbarWrapper = styled.div`
  width: 250px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
