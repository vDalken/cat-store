import catsData from '../../assets/data/cat_data.json'
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
  Section,
  StyledLink
} from './styles'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsAtCats } from '../../features/componentSlice'
import { setCurrentCatUrl } from '../../features/urlSlice'
import { useEffect, useState } from 'react'
import AdoptionFormModal from '../AdoptionFormModal'

const CatDescription = () => {
  const { id } = useParams<{ id: string }>()
  const catId = parseInt(id || '1')
  const catsArray = Object.values(catsData)

  const cat: Cat | undefined = catsArray[catId - 1]

  const location = useLocation()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

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
            <h2>{cat.name}</h2>
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
