import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Section from './section'

const Navbar = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const pages = 
          data &&
          data.allMarkdownRemark &&
          data.allMarkdownRemark.edges
        const pageObject = {};
        pages.forEach(page => {
          if (pageObject[page.node.frontmatter.sectionOrder]){
            pageObject[page.node.frontmatter.sectionOrder].push(page)
          } else {
            pageObject[page.node.frontmatter.sectionOrder] = [page]
          }
        })

        const sections = Object.values(pageObject).map(section => {
          return(
            <Section
              sectionInfo={section}
            />
          )
        })

        return(
          <NavWrapper>
            {sections}
          </NavWrapper>
        )
      }}
    >
    </StaticQuery>
  )
}

const NavWrapper = styled.div`
  background-color: rgba(59, 69, 78, .05);
  border-right: 1px solid rgb(230, 236, 241);
  padding: 2rem;
`;

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          order
          section
          sectionOrder
        }
        html
      }
    }
  }
}
`;

export default Navbar
