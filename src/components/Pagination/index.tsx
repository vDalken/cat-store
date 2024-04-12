import React, { useEffect, useState, useRef } from 'react'
import {
  Box,
  PaginationLink,
  PaginationLinkContainer,
  PageNumberContainer
} from './styles'
import { useNavigate, useParams } from 'react-router-dom'

interface PaginationProps {
  totalPages: number
  previousButtonText: string
  nextButtonText: string
  partialRoute: string
  paramName: string
}

export const Pagination = ({
  totalPages,
  previousButtonText,
  nextButtonText,
  partialRoute,
  paramName
}: PaginationProps) => {
  const navigate = useNavigate()
  const params = useParams<{ [key: string]: string }>()
  const currentPage = parseInt(params[paramName] || '1')

  if (paramName === 'pageNumber') {
    if (!(currentPage > 0 && currentPage <= totalPages)) {
      navigate('/shop/page/1')
    }
  }

  if (paramName === 'id') {
    if (!(currentPage > 0 && currentPage <= totalPages)) {
      navigate('/cat/1')
    }
  }

  const previousPage = currentPage > 1 ? currentPage - 1 : 1
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages
  const [inputPage, setInputPage] = useState(currentPage)
  const inputRef = useRef<HTMLSpanElement>(null)

  const handlePressedKey = (event: KeyboardEvent) => {
    if (document.activeElement === inputRef.current) {
      return
    }
    if (event.key === 'ArrowLeft') {
      navigate(`${partialRoute}${previousPage}`)
    }
    if (event.key === 'ArrowRight') {
      navigate(`${partialRoute}${nextPage}`)
    }
  }

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      const pageNumber = parseInt(inputRef.current?.innerText || '')
      if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
        navigate(`${partialRoute}${pageNumber}`)
      }
    }
  }

  const handleInputChange = () => {
    if (inputRef.current) {
      const newValue = parseInt(inputRef.current.innerText)
      if (!isNaN(newValue)) {
        setInputPage(newValue)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handlePressedKey)
    return () => {
      window.removeEventListener('keydown', handlePressedKey)
    }
  })

  useEffect(() => {
    setInputPage(currentPage)
  }, [currentPage])

  if(totalPages===0){
    return;
  }

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
        <span
          contentEditable={true}
          ref={inputRef}
          onKeyDown={handleInputKeyPress}
          onBlur={handleInputChange}
          suppressContentEditableWarning={true}
        >
          {inputPage}
        </span>
        <p>/{totalPages}</p>
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
