import { Box, ButtonLink, PageNumberLink, Ul } from './styles'


export const Pagination = () => {
  return (
    <>
      <Box>
        <button>
          <ButtonLink to="#">Prev</ButtonLink>
        </button>
        <Ul>
          <li>
            <PageNumberLink to="/shop/page1">1</PageNumberLink>
          </li>
          <li>
            <PageNumberLink to="/shop/page2">2</PageNumberLink>
          </li>
          <li>
            <PageNumberLink to="/shop/page3">3</PageNumberLink>
          </li>
        </Ul>
        <button>
          <ButtonLink to="#">Next</ButtonLink>
        </button>
      </Box>
    </>
  )
}
