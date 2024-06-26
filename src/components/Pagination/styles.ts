import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Box = styled.div`
  background-color: #f5c6c6;
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
  background-color: #b77e75;
  border: none;
  cursor: pointer;
  color: #fff;
  overflow: hidden;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    background-color: #fff;
    color: #b77e75;
  }

  @media screen and (max-width: 750px) {
    font-size: 1rem;
  }
`

export const PageNumberContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  > span {
    list-style: none;
    width: 25px;
    height: 25px;
    line-height: 40px;
    border-radius: 100px;
    text-align: center;
    color: #b77e75;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #b77e75;

    &:focus {
      outline: none;
    }
  }
  > p {
    list-style: none;
    width: 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 100px;
    text-align: center;
    color: #b77e75;
    display: flex;
    align-items: center;
    justify-content: center;
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
