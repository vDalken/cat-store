import { useDispatch } from 'react-redux'
import { Div, Text } from './styles'
import { setIsAtCats } from '../../features/componentSlice'
import { useEffect } from 'react'

export const Homepage = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(setIsAtCats(false))
  },[dispatch])
  return (
    <Div>
      <Text>
        <h1>Welcome to Purrfect</h1>
        <p>
          Your favorite store in the world! This is where you'll find you furry
          friend.
        </p>
      </Text>
    </Div>
  )
}
