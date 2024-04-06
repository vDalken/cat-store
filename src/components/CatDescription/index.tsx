import React from 'react'
import catsData from '../../assets/data/cat_data.json'
import { Cat } from '../../Cat'
import {
  Background,
  Break,
  Image,
  ImageArea,
  ImageContainer,
  Info,
  InfoContainer,
  InfoSection,
  Section,
  StyledLink
} from './styles'

interface CatDescriptionProps {
  id: string
}

const CatDescription: React.FC<CatDescriptionProps> = ({ id }) => {
  const catId = parseInt(id)
  const catsArray = Object.values(catsData)

  const cat: Cat | undefined = catsArray[catId]

  if (!cat) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <ImageContainer>
        <Background>
          <ImageArea>
            <Image src={cat.image} alt={cat.name} />
          </ImageArea>
        </Background>
      </ImageContainer>

      <InfoContainer>
        <Info>
          <h2>{cat.name}</h2>
          <Break />
          <Section>
            <StyledLink
              href={`https://en.wikipedia.org/wiki/${cat.race}_cat`}
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
            <p>{cat.price}€</p>
          </InfoSection>
        </Info>
      </InfoContainer>
    </div>
  )
}

export default CatDescription
