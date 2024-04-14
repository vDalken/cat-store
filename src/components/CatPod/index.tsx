import { Cat } from '../../Cat'
import {
  Box,
  CatCard,
  Content,
  ImageContainer,
  StyledLink
} from '../CatList/styles'
import { setArray } from '../../features/cats/catsSlice'
import { useDispatch } from 'react-redux'

interface CatPodProps {
  cat: Cat
  i: number
  cats: Cat[]
}

export const CatPod = ({ cat, i, cats }: CatPodProps) => {
  const rotateAngle = i % 2 === 0 ? -8 : 8;
  const dispatch = useDispatch()

  const handleClick = () => {
    const updatedCats = cats.map((c) => {
      if (c.id === cat.id) {
        return { ...c, isFavorite: !c.isFavorite }
      }
      return c
    })
  
    dispatch(setArray(updatedCats))
  }

  return (
    <>
      <Box key={i} $rotateAngle={rotateAngle}>
        <StyledLink to={`/cat/${eval(`${cat.id}+1`)}`}>
          <CatCard>
            <ImageContainer $backgroundImage={cat.image} />
          </CatCard>
        </StyledLink>
        <Content>
          <span>{cat.name}</span>
          <button onClick={handleClick}>
            {/*() => handleClick((i+1).toString())*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="red"
              fill={cat.isFavorite ? 'red' : '#fff'}
            >
              <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
            </svg>
          </button>
        </Content>
      </Box>
    </>
  )
}
