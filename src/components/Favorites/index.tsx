import {
  Box,
  CatCard,
  Content,
  ImageContainer,
  StyledLink
} from '../CatList/styles'
import { Div } from './styles'
import { setArray } from '../../features/cats/catsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useParams } from 'react-router-dom'

export const Favorites = () => {

  const {pageId} = useParams<{pageId: string}>()
  const page = parseInt(pageId || '1')
  const startIndex = (page - 1) * 10
  const endIndex = page * 10
  const dispatch = useDispatch()
  const catsArray = useSelector((state:RootState) => state.cats.catsArray)
  const favoriteCatsArray = catsArray.filter(cat => cat.isFavorite)
  const catsOnPage = favoriteCatsArray.slice(startIndex, endIndex)

  if (!catsArray.find((cat) => cat.isFavorite === true)) {
    return <Div>No favorites found.</Div>
  }

  const handleClick = (id: string) => {
    const updatedCatsArray = catsArray.map((cat) =>
      cat.id === id ? { ...cat, isFavorite: !cat.isFavorite } : cat
    )
    dispatch(setArray(updatedCatsArray))
  }

  return (
    <>
      <Div>
        {catsOnPage.map((cat) => {
          if (cat.isFavorite) {
            return (
              <Box key={cat.id} $rotateAngle={parseInt(cat.id) % 2 === 0 ? -8 : 8}>
                <StyledLink to={`/cat/${cat.id}`}>
                  <CatCard>
                    <ImageContainer $backgroundImage={cat.image} />
                  </CatCard>
                </StyledLink>
                <Content>
                  <span>{cat.name}</span>
                  <button onClick={() => handleClick(cat.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="red"
                      fill="red"
                    >
                      <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
                    </svg>
                  </button>
                </Content>
              </Box>
            )
          }
        })}
      </Div>
    </>
  )
}
