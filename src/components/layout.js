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
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossorigin="anonymous"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutWrapper>
          <ContentWrapper>{children}</ContentWrapper>
          <Navbar />
        </LayoutWrapper>
      </>
    )}
  />
)

const ContentWrapper = styled.div`
  padding: 40px 0;
  width: 100%;
`

const LayoutWrapper = styled.div`
  display: flex;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
