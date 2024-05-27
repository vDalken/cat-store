import { SleepingCat } from '../SleepingCat'
import { CatContainer, Div, MessageContainer } from './styles'

export const Error = () => {
  return (
    <>
      <Div>
        <MessageContainer>
          <h1>Oops!</h1>
          <p>You're in the wrong place.</p> 
          <p>DO NOT DISTURB THE CAT PLEASE!</p>
        </MessageContainer>
        <CatContainer>
          <SleepingCat />
        </CatContainer>
      </Div>
    </>
  )
}
