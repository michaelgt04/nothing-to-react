import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Section from './section'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSection: null,
      collapsed: true,
    }
  }

  selectSection = sectionIndex => {
    const { selectedSection } = this.state

    if (selectedSection === sectionIndex) {
      this.setState({ selectedSection: null })
    } else {
      this.setState({ selectedSection: sectionIndex })
    }
  }

  handleMouseClick = () => {
    const { collapsed } = this.state

    this.setState({ collapsed: !collapsed })
  }

  render() {
    const { collapsed, selectedSection } = this.state

    return (
      <NavContainer
      >
        <StaticQuery
          query={query}
          render={data => {
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
                <Fragment>
                  <CollapsedState onClick={this.handleMouseClick}>
                    <i className="fas fa-book-open" />
                  </CollapsedState>
                  <CSSTransition
                    timeout={0}
                    key={1}
                    appear={true}
                    classNames="nav"
                    in={!collapsed}
                    onExit={() => console.log('what')}
                  ><NavWrapper key={1}>{sections}</NavWrapper>
                  </CSSTransition>
                </Fragment>
            )
          }}
        />
      </NavContainer>
    )
  }
}

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CollapsedState = styled.div`
  position: relative;
  bottom: 10px;
  left: calc(50% - 50px);
  height: 60px;
  background-color: #f7ce3e;
  border-radius: 50%;
  color: #1A2930;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: top;
  cursor: pointer;
  
  i {
    padding-top: 19px;
  }
`

const NavWrapper = styled.nav`
  z-index: 1;
  background-color: #ffffff;
  height: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &.nav-enter {
    padding: 1.5rem 2rem;
    border-top: 3px solid #f7ce3e;
  }

  &.nav-enter-active {
    padding: 1.5rem 2rem;
    border-top: 3px solid #f7ce3e;
  }

  &.nav-enter-done {
    padding: 1.5rem 2rem;
    border-top: 3px solid #f7ce3e;
    transition: height 0.25s ease;
    height: 150px;
  }

  &.nav-exit {
    padding: 1.5rem 2rem;
    border-top: 3px solid #f7ce3e;
    transition: height 0.25s ease;
    height: 0px;
  }

  &.nav-exit-active {
    padding: 1.5rem 2rem;
    border-top: 3px solid #f7ce3e;
    transition: height 0.25s ease;
    height: 0px;
  }

  &.nav-exit-done {
    border-top: 0px;
    padding: 0px;
    transition: height 0.25s ease;
    height: 0px;
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
