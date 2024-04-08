import styled from 'styled-components'

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

  @media screen and (max-width: 750px) {
    width: 20rem;
    height: 20rem;
  }
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

  > h2,
  h3 {
    color: var(--black);
    opacity: 0.8;
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

export const StyledLink = styled.a`
  color: var(--blue);
`

export const Break = styled.div`
  height: 2px;
  border-bottom: 1px solid lightgray;
`

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const Div = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1005px) {
      flex-direction: column;

  }
`

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  color: var(--blue);
  box-shadow: 0 10px 30px -15px #000;
  padding: 2rem;
  border-radius: 0.4rem;
`

export const ButtonHolder = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  >button{
    color: var(--black);
    background-color: transparent;
    border: 2px solid var(--blue);
    border-radius: .4rem;
    cursor: pointer;
    padding: .4rem;
  }

  >button:hover{
    background-color: var(--blue);
    color: #fff;
    border: none;
  }
`
