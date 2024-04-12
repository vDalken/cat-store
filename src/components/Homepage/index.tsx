import { useDispatch } from 'react-redux'
import { SleepingCat } from '../SleepingCat'
import { CatContainer, Div, Text } from './styles'
import { setIsAtCats } from '../../features/componentSlice'

export const Homepage = () => {
  const dispatch = useDispatch()
  
  dispatch(setIsAtCats(false))
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
