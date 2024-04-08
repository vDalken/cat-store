import React, { useEffect, useState, useRef } from 'react';
import { Box, PaginationLink, PaginationLinkContainer, PageNumberContainer } from './styles';
import { useNavigate } from 'react-router-dom';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  previousButtonText: string;
  nextButtonText: string;
  partialRoute: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  previousButtonText,
  nextButtonText,
  partialRoute
}: PaginationProps) => {
  const navigate = useNavigate();
  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
  const [inputPage, setInputPage] = useState(currentPage);
  const inputRef = useRef<HTMLSpanElement>(null);

  const handlePressedKey = (event: KeyboardEvent) => {
    if (document.activeElement === inputRef.current) {
      return; 
    }
    if (event.key === 'ArrowLeft') {
      navigate(`${partialRoute}${previousPage}`);
    }
    if (event.key === 'ArrowRight') {
      navigate(`${partialRoute}${nextPage}`);
    }
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      const pageNumber = parseInt(inputRef.current?.innerText || '');
      if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
        navigate(`${partialRoute}${pageNumber}`);
      }
    }
  };

  const handleInputChange = () => {
    if (inputRef.current) {
      const newValue = parseInt(inputRef.current.innerText);
      if (!isNaN(newValue)) {
        setInputPage(newValue);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handlePressedKey);
    return () => {
      window.removeEventListener('keydown', handlePressedKey);
    };
  });

  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

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
  );
};

export default Pagination;
