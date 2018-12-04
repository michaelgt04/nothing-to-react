import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import stickybits from 'stickybits'
import Section from './section'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSection: null,
      collapsed: true,
    }
  }

  componentDidMount = () => {
    stickybits('#nav-bar')
  }

  selectSection = sectionIndex => {
    const { selectedSection } = this.state

    if (selectedSection === sectionIndex) {
      this.setState({ selectedSection: null })
    } else {
      this.setState({ selectedSection: sectionIndex })
    }
  }

  handleMouseEnter = () => {
    const { collapsed } = this.state

    if (collapsed) {
      this.setState({ collapsed: false })
    }
  }

  handleMouseLeave = () => {
    const { collapsed } = this.state

    if (!collapsed) {
      this.setState({ collapsed: true })
    }
  }

  render() {
    const { collapsed, selectedSection } = this.state

    return (
      <div
        id="nav-bar"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <StaticQuery
          query={query}
          render={data => {
            if (collapsed) {
              return (
                <CollapsedState>
                  <i className="fas fa-book-open" />
                </CollapsedState>
              )
            }

            const pages =
              data && data.allMarkdownRemark && data.allMarkdownRemark.edges
            const pageObject = {}
            pages.forEach(page => {
              if (pageObject[page.node.frontmatter.sectionOrder]) {
                pageObject[page.node.frontmatter.sectionOrder].push(page)
              } else {
                pageObject[page.node.frontmatter.sectionOrder] = [page]
              }
            })

            const sections = Object.values(pageObject).map((section, index) => {
              const selected = index === selectedSection
              const handleClick = () => this.selectSection(index)

              return (
                <Section
                  key={index}
                  handleClick={handleClick}
                  sectionInfo={section}
                  selected={selected}
                />
              )
            })

            return (
              <CSSTransition
                timeout={0}
                key={1}
                appear={true}
                classNames="nav"
                in
              >
                <NavWrapper key={1}>{sections}</NavWrapper>
              </CSSTransition>
            )
          }}
        />
      </div>
    )
  }
}

const CollapsedState = styled.div`
  width: 50px;
  background-color: rgba(59, 69, 78, 0.05);
  border-right: 1px solid rgb(230, 236, 241);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavWrapper = styled.nav`
  background-color: rgba(59, 69, 78, 0.05);
  border-right: 1px solid rgb(230, 236, 241);
  height: 100vh;
  padding: 1.5rem 2rem;
  width: 50px;

  &.nav-enter-done {
    margin-right: 3rem;
    transition: width 0.25s ease;
    width: 250px;
  }
`

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
`

export default Navbar
