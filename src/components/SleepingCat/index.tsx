import { Body, Bubble, Cat, Container, Ear, Eye, Mouth, Nose, Shadow, Tail } from "./styles"


export const SleepingCat = () =>{
    return (
        <>
            <Container>
                <Shadow />
                <Cat>
                    <Ear />
                    <Eye />
                    <Mouth />
                    <Nose />
                    <Tail/>
                    <Body />
                    <Bubble />
                </Cat>
            </Container>
        </>
    )
}