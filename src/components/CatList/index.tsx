import React from 'react'
import { Cat } from '../../Cat'
import { CatCard, CatName, StyledLink } from './styles'

interface CatListProps {
  cats: Cat[]
  page: number
}

const CatList: React.FC<CatListProps> = ({ cats, page }) => {
  const startIndex = page === 1 ? 0 : (page-1) * 10
  return (
    <>
      {cats.map((cat, i) => (
        <StyledLink to={`/cat/${i + 1 + startIndex}`} key={i}>
          <CatCard $backgroundImage={cat.image}>
            <CatName>{cat.name}</CatName>
          </CatCard>
        </StyledLink>
      ))}
    </>
  )
}

export default CatList
