import styled from "styled-components";
import logo from '/public/pink-gradient-layer-patterned-background_53876-99010.jpg'

export const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 4rem;
    gap: 6rem;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
`;