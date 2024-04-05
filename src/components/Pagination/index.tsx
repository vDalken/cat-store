import { useEffect } from 'react'
import {
  Box,
  PaginationLink,
  PaginationLinkContainer,
  PageNumberContainer
} from './styles'
import { useNavigate } from 'react-router-dom'

interface PaginationProps {
  currentPage: number
  totalPages: number
  previousButtonText: string
  nextButtonText: string
  partialRoute: string
}

export const Pagination = ({
  currentPage,
  totalPages,
  previousButtonText,
  nextButtonText,
  partialRoute
}: PaginationProps) => {
  const navigate = useNavigate()
  const previousPage = currentPage > 1 ? currentPage - 1 : 1
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages

  const handlePressedKey = (event: KeyboardEvent) =>{
    if(event.key === 'ArrowLeft'){
      navigate(`${partialRoute}${previousPage}`)
    }
    if(event.key === 'ArrowRight'){
      navigate(`${partialRoute}${nextPage}`)
    }
  }

  useEffect(() =>{
    window.addEventListener('keydown', handlePressedKey)
    return () =>{
      window.removeEventListener('keydown', handlePressedKey)
    }
  })

  return (
    <Box>
      <PaginationLinkContainer $justifyContent="flex-end">
        {currentPage > 1 && (
          <PaginationLink to={`${partialRoute}${previousPage}`}>
            {previousButtonText}
          </PaginationLink>
        )}
      </PaginationLinkContainer>

      <PageNumberContainer>
        <span>{currentPage}</span>
      </PageNumberContainer>

      <PaginationLinkContainer $justifyContent="flex-start">
        {currentPage < totalPages && (
          <PaginationLink to={`${partialRoute}${nextPage}`}>
            {nextButtonText}
          </PaginationLink>
        )}
      </PaginationLinkContainer>
    </Box>
  )
}

export default Pagination
