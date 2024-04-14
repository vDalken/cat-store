import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface IconProps {
  $clicked: boolean
}

interface NavBackgroundProps {
  $clicked: boolean
}

interface NavigationProps {
  $clicked: boolean
}

const COLORS = {
  primaryDark: '#db96a2',
  primaryLight: '#373737'
}

export const MenuLabel = styled.label`
  background-color: #fff;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  transform: scale(.5);

  @media screen and (min-width: 750px) {
    display: none;
  }
`

export const NavBackground = styled.div<NavBackgroundProps>`
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.$clicked ? 'scale(80)' : 'scale(0)')};
  transition: transform 0.8s;
`

export const Icon = styled.span<IconProps>`
  position: relative;
  background-color: ${(props) => (props.$clicked ? 'transparent' : '#db96a2')};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: '';
    background-color: #db96a2;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.$clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.$clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    top: ${(props) => (props.$clicked ? '0' : '0.8rem')};

    transform: ${(props) => (props.$clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.$clicked ? '0' : '-1rem')};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.$clicked ? '0' : '1rem')};
  }
`

export const Navigation = styled.nav<NavigationProps>`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.$clicked ? '100%' : '0')};
  opacity: ${(props) => (props.$clicked ? '1' : '0')};

  transition: width 0.8s, opacity 0.8s;
`

export const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`
export const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: #fff;
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`
