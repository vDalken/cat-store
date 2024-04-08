import React from 'react'
import { Cat } from '../../Cat'
import { Box, CatCard, Content, ImageContainer, StyledLink } from './styles'

interface CatListProps {
  cats: Cat[]
  page: number
}

const CatList: React.FC<CatListProps> = ({ cats, page }) => {
  const startIndex = page === 1 ? 0 : (page - 1) * 10
  return (
    <>
      {cats.map((cat, i) => (
        <StyledLink to={`/cat/${i + 1 + startIndex}`} key={i}>
          <Box>
            <CatCard>
              <ImageContainer $backgroundImage={cat.image} />
            </CatCard>
            <Content>
              <span>{cat.name}</span>
            </Content>
          </Box>
        </StyledLink>
      ))}
    </>
  )
}

export default CatList
