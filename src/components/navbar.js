import React from 'react'
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
          return <h4>{section[0].node.frontmatter.section}</h4>
        })

        return(
          <div>
            {sections}
          </div>
        )
      }}
    >
    </StaticQuery>
  )
}

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
