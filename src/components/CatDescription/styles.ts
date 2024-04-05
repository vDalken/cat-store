import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ImageContainer = styled.div`
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 100%;
`

export const ImageArea = styled.div`
  width: 35rem;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Background = styled.div`
  background-color: black;
  height: 100%;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

export const Info = styled.div`
  width: 35rem;
  box-shadow: 0 10px 30px -15px #000;
  border-radius: 0.4rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > h2,h3 {
    color: var(--black);
    opacity: .8;
  }
`

export const Section = styled.div`
  display: flex;
  gap: 2rem;

  > ul {
    list-style-type: none;
    padding: 0;
  }

  > ul > li::before {
    content: '•';
    display: inline-block;
    width: 1em;
    margin-left: -1.4em;
    color: gray;
    font-size: 1em;
  }
`

export const StyledLink = styled(Link)`
  color: var(--blue);
`

export const Break = styled.div`
  height: 2px;
  border-bottom: 1px solid lightgray;
`

export const InfoSection = styled.div`
display: flex;
flex-direction: column;
gap: .2rem;
`
