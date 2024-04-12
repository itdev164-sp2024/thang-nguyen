import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import {H1} from "../Heading"
import {Section} from '../Section'

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: ${props => props.theme.header.color};
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  background: ${props => props.theme.header.color};
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
  <Section width={11/12}>
    <StyledLink to="/">
      <H1>
        {siteTitle}
      </H1>
    </StyledLink>
  </Section>
  <Section width={1/12}>
    Search
  </Section>
</StyledHeader>
)

Header.propTypes = {
  siteTtle: PropTypes.string
}

Header.defaultProp = {
  siteTitle: ""
}

export {Header}