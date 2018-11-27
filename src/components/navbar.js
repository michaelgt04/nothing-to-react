import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

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
        console.log(pageObject)

        const sections = Object.values(pageObject).map(section => {
          return(
            <SectionHeaderWrapper>
              <span>{section[0].node.frontmatter.section}</span>
            </SectionHeaderWrapper>
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

const SectionHeaderWrapper = styled.div`
  padding: .5rem 1rem;
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
