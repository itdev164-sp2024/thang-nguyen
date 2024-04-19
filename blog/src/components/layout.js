
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from 'styled-components';

import {Main} from './Main'
import {Footer} from './Footer'
import {Header} from "./Header"
import "./layout.css"
import { Gray } from "./themes/Gray"


const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


return (
  <ThemeProvider theme={Gray}>
    <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
    <Content>
      <Main m={20}> {children} </Main> 
      <Footer 
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
        >
          {new Date().getFullYear()} &middot; Built with
          {``}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
    </Content>
  </ThemeProvider>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

/*
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
*/