import styled from "styled-components";

type ContainerProps = {
    $backgroundImage: string;
};

export const Container = styled.div<ContainerProps>`
    padding: 4rem;
    width: 20rem;
    height: 20rem;
    background-repeat: no-repeat;
    background-image: center;
    background-position: center;
    background-image: url(${(props) => props.$backgroundImage});
    border: 2px solid black;
    color: white;
`;