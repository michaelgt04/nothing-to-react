import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const LessonTemplate = props => {
  return (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                slug
              }
              html
            }
          }
        }
      }
    `}
    render={data => {
      const post = data.allMarkdownRemark.edges.find(
        node => node.node.frontmatter.slug === props.pageContext.slug
      )

      return(
        <Layout>
          <h1>Hoi this is template</h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.node.html }}
          />
        </Layout>
      )
    }}
  />
  )
}

export default LessonTemplate;
