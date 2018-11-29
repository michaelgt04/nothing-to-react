import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const LessonTemplate = props => {
  const { data } = props;

  console.log(data)
  const lesson = data.markdownRemark.html

  return (
    <Layout>
      <h1>Hoi this is template</h1>
      <div
        dangerouslySetInnerHTML={{ __html: lesson}}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query LessonByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default LessonTemplate;
