import { SleepingCat } from '../SleepingCat'
import { CatContainer, Div, Text } from './styles'

interface Homepage{
  setIsAtCats: (boo: boolean) => void
}

export const Homepage = ({setIsAtCats}: Homepage) => {
  setIsAtCats(false)
  return (
    <Div>
      <Text>
        <h1>Welcome to Purr-fect - Your favorite store in the world! This is where you'll find you furry friend.</h1>
      </Text>
      <CatContainer>
        <SleepingCat />
      </CatContainer>
    </Div>
  )
}
