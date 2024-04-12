import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  background-image: url('https://img.freepik.com/free-vector/flat-design-paw-prints-background_23-2151169523.jpg?w=1480&t=st=1712825623~exp=1712826223~hmac=11e536220d142a862bd503e24cacdc6860049a16468aed2f289667444a715611');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`

export const Image = styled.img`
  display: block;
  width: 24rem;
  height: 24rem;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
  border: 8px solid #fff;
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
  background-color: #fff;

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
  color: #f5c6c6;
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

  > button {
    color: var(--black);
    background-color: transparent;
    border: 2px solid var(--blue);
    border-radius: 0.4rem;
    cursor: pointer;
    padding: 0.4rem;
  }

  > button:hover {
    background-color: var(--blue);
    color: #fff;
    border: none;
  }
`
