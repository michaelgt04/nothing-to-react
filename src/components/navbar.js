import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Section from './section'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: null
    }
  }

  selectSection = sectionIndex => {
    const { selectedSection } = this.state;
    
    if (selectedSection === sectionIndex) {
      this.setState({ selectedSection: null })
    } else {
      this.setState({ selectedSection: sectionIndex })
    }
  }

  render() {
    const { selectedSection } = this.state;

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

          const sections = Object.values(pageObject).map((section, index)=> {
            const selected = index === selectedSection
            const handleClick = () => this.selectSection(index)

            return(
              <Section
                key={index}
                handleClick={handleClick}
                sectionInfo={section}
                selected={selected}
              />
            )
          })

          return(
            <NavWrapper>
              {sections}
            </NavWrapper>
          )
        }}
      />
    )
  }
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
          slug
        }
        html
      }
    }
  }
}
`;

export default Navbar
