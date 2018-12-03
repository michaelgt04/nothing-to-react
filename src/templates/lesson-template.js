import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const LessonTemplate = props => {
  const { data } = props

  const lesson = data.markdownRemark.html

  return (
    <ContentWrapper>
      <div dangerouslySetInnerHTML={{ __html: lesson }} />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  margin: auto;
  max-width: 500px;

  @media (min-width: 800px) {
    max-width: 740px;
  }
`

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
