import {
  Box,
  CatCard,
  Content,
  ImageContainer,
  StyledLink
} from '../CatList/styles'
import { Div } from './styles'
import { Cat } from '../../Cat'

interface FavoritesProps {
  catsArray: Cat[]
  favoriteCats: Array<number>
  setFavoriteCats: (array: Array<number>) => void
  setCatsArray: (array: Array<Cat>) => void
}

export const Favorites = ({
  catsArray,
  setCatsArray
}: FavoritesProps) => {
  if (!catsArray.find((cat) => cat.isFavorite === true)) {
    return <Div>No favorites found.</Div>
  }

  const handleClick = (id: number) => {
    const updatedCatsArray = catsArray.map((cat, index) =>
      index === id ? { ...cat, isFavorite: !cat.isFavorite } : cat
    )

    setCatsArray(updatedCatsArray)
  }

  return (
    <>
      <Div>
        {catsArray.map((cat, i) => {
          if (cat.isFavorite) {
            return (
              <Box key={i}>
                <StyledLink to={`/cat/${i + 1}`}>
                  <CatCard>
                    <ImageContainer $backgroundImage={cat.image} />
                  </CatCard>
                </StyledLink>
                <Content>
                  <span>{cat.name}</span>
                  <button onClick={() => handleClick(i)}>
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
