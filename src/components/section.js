import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Section = props => {
  const { handleClick, sectionInfo, selected } = props

  const sectionHeader =
    sectionInfo[0] &&
    sectionInfo[0].node &&
    sectionInfo[0].node.frontmatter &&
    sectionInfo[0].node.frontmatter.section

  const lessons = sectionInfo.map(lesson => {
    const frontmatter = lesson.node.frontmatter

    return <Link to={`/${frontmatter.slug}`}>{frontmatter.title}</Link>
  })

  return (
    <SectionWrapper>
      <span onClick={handleClick}>{sectionHeader || '{Default Header}'}</span>
      {selected && <div>{lessons}</div>}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  padding: 0.5rem 1rem;
`

export default Section
