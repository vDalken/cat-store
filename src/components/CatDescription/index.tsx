import { Cat } from '../../Cat'
import {
  AdoptButton,
  Break,
  BuyZone,
  Content,
  Div,
  Image,
  Info,
  InfoContainer,
  InfoSection,
  NameInfo,
  Section,
  StyledLink
} from './styles'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAtCats } from '../../features/componentSlice'
import { setCurrentCatUrl } from '../../features/urlSlice'
import { useEffect, useState } from 'react'
import AdoptionFormModal from '../AdoptionFormModal'
import { RootState } from '../../app/store'
import { setArray } from '../../features/cats/catsSlice'

const CatDescription = () => {
  const { id } = useParams<{ id: string }>()
  let catId = parseInt(id || '1')
  const cats = useSelector((state: RootState) => {console.log(state); return state.cats.catsArray})
  const cat: Cat | undefined = cats[catId - 1]
  const location = useLocation()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  catId = eval(`${catId.toString()}-1`)

  const handleClick = () => {
    const updatedCats = cats.map((c) => {
      if (c.id === catId.toString()) {
        console.log(id)
        console.log(catId.toString())
        return { ...c, isFavorite: !c.isFavorite }
      }
      return c
    })
  
    dispatch(setArray(updatedCats))
  }

  useEffect(() => {
    dispatch(setIsAtCats(true))
    dispatch(setCurrentCatUrl(location.pathname))
  }, [location.pathname, dispatch])

  if (!cat) {
    return <div>Product not found</div>
  }

  return (
    <Content>
      <Image src={cat.image} alt={cat.name} />
      <Div>
        <InfoContainer>
          <Info>
            <NameInfo>
              <h2>{cat.name}</h2>
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
            </NameInfo>
            <Break />
            <Section>
              <StyledLink
                href={`https://en.wikipedia.org/wiki/${cat.race}_cat`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cat.race}
              </StyledLink>
              <ul>
                <li>{cat.location}</li>
              </ul>
            </Section>
            <Break />
            <h2>About</h2>
            <InfoSection>
              <h3>Age</h3>
              <p>
                {cat.age} {cat.age > 1 ? 'years' : 'year'}
              </p>
            </InfoSection>
            <InfoSection>
              <h3>Color</h3>
              <p>{cat.color}</p>
            </InfoSection>
            <InfoSection>
              <h3>Weight</h3>
              <p>{cat.weight} kg</p>
            </InfoSection>
            <Break />
            <InfoSection>
              <h3>Adoption Fee</h3>
              <BuyZone>
                <p>{cat.price}€</p>
                <AdoptButton onClick={() => setShow((show) => !show)}>
                  Adopt
                </AdoptButton>
              </BuyZone>
              <AdoptionFormModal
                show={show}
                closeModal={() => setShow(false)}
                cat={cat}
              />
            </InfoSection>
          </Info>
        </InfoContainer>
      </Div>
    </Content>
  )
}

export default CatDescription
