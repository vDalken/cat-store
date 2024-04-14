import { css } from 'styled-components'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const above400px = (args: TemplateStringsArray) => css`
  @media (min-width: 750px) {
    ${css(args)}
  }
`

export const Nav = styled.nav`
  background-color: #db96a2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.6rem;

  @media screen and (max-width: 750px) {
    padding: 0.8rem;
  }
`

export const Ul = styled.ul`
  display: none;

  ${above400px`
    display: flex; 
    gap: 2.4rem;
    list-style-type: none;
    font-size: var(--second-hsize);
`}
`

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    opacity: .6;
  }

  &.active {
    text-decoration: underline;
  }
`

export const Svg = styled.svg`
  fill: white;
  transform: scale(1.4);
`

export const LogoContainer = styled.div`
  max-width: 100%;
`
