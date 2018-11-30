import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const LessonTemplate = props => {
  const { data } = props

  const lesson = data.markdownRemark.html

  return (
    <div>
      <h1>Hoi this is template</h1>
      <div dangerouslySetInnerHTML={{ __html: lesson }} />
    </div>
  )
}

export const pageQuery = graphql`
  query LessonByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default LessonTemplate
