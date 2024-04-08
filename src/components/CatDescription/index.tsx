import React, { useEffect } from 'react'
import catsData from '../../assets/data/cat_data.json'
import { Cat } from '../../Cat'
import {
  Background,
  Break,
  ButtonHolder,
  Div,
  Image,
  ImageArea,
  ImageContainer,
  Info,
  InfoContainer,
  InfoSection,
  Question,
  Section,
  StyledLink
} from './styles'
import { useLocation } from 'react-router-dom';

interface CatDescriptionProps {
  id: string;
  addToFavorites: (catId: string) => void;
  setCurrentUrl: (url: string) => void;
}

const CatDescription: React.FC<CatDescriptionProps> = ({ id, addToFavorites, setCurrentUrl }) => {
  const catId = parseInt(id)
  const catsArray = Object.values(catsData)

  const cat: Cat | undefined = catsArray[catId]

  const location = useLocation()
  
  useEffect(()=>{
    setCurrentUrl(location.pathname)
  },[location.pathname,setCurrentUrl])

  if (!cat) {
    return <div>Product not found</div>
  }

  const handleAddToFavorites = () => {
    addToFavorites(id);
  };



  return (
    <div>
      <ImageContainer>
        <Background>
          <ImageArea>
            <Image src={cat.image} alt={cat.name} />
          </ImageArea>
        </Background>
      </ImageContainer>
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
              <p>{cat.price}€</p>
            </InfoSection>
          </Info>
        </InfoContainer>
        <InfoContainer>
          <Question>
            <h2>Am I your favorite?</h2>
            <ButtonHolder>
              <button onClick={handleAddToFavorites}>Yes</button>
              <button>No</button>
            </ButtonHolder>
          </Question>
        </InfoContainer>
      </Div>
    </div>
  )
}

export default CatDescription
