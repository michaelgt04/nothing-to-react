import React from 'react'
import styled from 'styled-components'

const Section = props => {
  const { sectionInfo } = props;

  const sectionHeader = 
    sectionInfo[0] &&
    sectionInfo[0].node &&
    sectionInfo[0].node.frontmatter &&
    sectionInfo[0].node.frontmatter.section
  
  return (
    <SectionWrapper>
      <span>{sectionHeader || "{Default Header}"}</span>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  padding: .5rem 1rem;
`;

export default Section;
