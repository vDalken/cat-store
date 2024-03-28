import { Container } from "./styles"

interface CatCardProps {
  img: string
  name: string
}

export const CatCard: React.FC<CatCardProps> = (cat) => {
  return (
    <>
      <Container $backgroundImage={cat.img}>
        <h1>{cat.name}</h1>
      </Container>
    </>
  )
}

/* "1": {
    "race": "siamese",
    "name": "Ricardo Silvério",
    "color": "Gray",
    "weight": 10,
    "age": 23,
    "location": "Egypt",
    "image": "https://img.freepik.com/free-photo/fluffy-kitten-sitting-grass-staring-sunset-playful-generated-by-artificial-intelligence_25030-67836.jpg?size=626&ext=jpg&ga=GA1.1.240794431.1709195503&semt=ais",
    "price": 100
},*/
