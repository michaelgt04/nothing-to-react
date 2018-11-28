import React from 'react'
import styled from 'styled-components'

const Section = props => {
  const { handleClick, sectionInfo, selected } = props;

  const sectionHeader = 
    sectionInfo[0] &&
    sectionInfo[0].node &&
    sectionInfo[0].node.frontmatter &&
    sectionInfo[0].node.frontmatter.section
  
  const lessons = sectionInfo.map(lesson => {
    return <span>{lesson.node.frontmatter.title}</span>
  })

  return (
    <SectionWrapper onClick={handleClick}>
      <span>{sectionHeader || "{Default Header}"}</span>
      {selected && <div>{lessons}</div>}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  padding: .5rem 1rem;
`;

export default Section;
