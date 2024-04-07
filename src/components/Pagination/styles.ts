import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Box = styled.div`
  background-color: #fff;
  padding: 0.4rem;
  box-shadow: 0 10px 30px -15px #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PaginationLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.2rem;
  background-color: var(--blue);
  border: none;
  cursor: pointer;
  color: #fff;
  overflow: hidden;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    background-color: #fff;
    color: var(--blue);
  }

  @media screen and (max-width: 750px) {
    font-size: 1rem;
  }

`

export const PageNumberContainer = styled.ul`
  display: flex;
  justify-content: center;

  > span {
    list-style: none;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 100px;
    text-align: center;
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none;
      border: 2px solid var(--blue);
    }
  }
`

interface PaginationLinkContainerProps {
  $justifyContent: string
}

export const PaginationLinkContainer = styled.div<PaginationLinkContainerProps>`
  width: 200px;
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: center;
`
