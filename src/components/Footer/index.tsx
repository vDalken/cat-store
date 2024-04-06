import { FooterContainer, Link } from './styles'

export const Footer = () => {
    const email = "fabiogoncalvesk093@gmail.com";
    const mailtoLink = `mailto:${email}`;
  return (
    <>
      <FooterContainer>
        <Link href={mailtoLink}>Questions? Email us</Link>
      </FooterContainer>
    </>
  )
}
