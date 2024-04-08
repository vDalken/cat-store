import { CatCard, CatName, StyledLink } from '../CatList/styles'
import catsData from '../../assets/data/cat_data.json'
import { Div } from './styles'

interface FavoritesProps {
  favoritesArray: string[]
}

interface CatData {
  [key: string]: {
    race: string
    name: string
    color: string
    weight: number
    age: number
    location: string
    image: string
    price: number
  }
}

export const Favorites: React.FC<FavoritesProps> = ({ favoritesArray }) => {
    if (!favoritesArray || favoritesArray.length === 0) {
        return <Div>No favorites found.</Div>;
      }
      console.log(favoritesArray)
  return (
    <>
      {favoritesArray.map((id, i) => {
        <StyledLink to={`/cat/${id}`} key={i}>
          <CatCard $backgroundImage={(catsData as CatData)[id].image}>
            <CatName>{(catsData as CatData)[id].name}</CatName>
          </CatCard>
        </StyledLink>
      })}
    </>
  )
}
