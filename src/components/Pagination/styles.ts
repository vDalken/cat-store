import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 10px 30px -15px #000;
    display: flex;
    align-items: center;
    justify-content: center;

    > button{
        font-size: 20px;
        font-weight: bold;
        background-color: var(--blue);
        border: none;
        cursor: pointer;
        border-radius: 100px;
        overflow: hidden;
    }
`;

export const Ul = styled.ul`
    display: flex;
    margin: 0 10px;

    > li{
        list-style: none;
        margin: 0 5px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 100px;
        text-align: center;
    }
`;

export const PageNumberLink = styled(NavLink)`
    font-size: 25px;
    text-decoration: none;
    color:var(--black);
    display: block;
    border-radius: 100px;
    transition: 0.2s;

    &:hover{
        background-color: var(--light-green);
        color: #fff;
    }

`;

export const ButtonLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px 20px;
    display: block;
    color: var(--black);
    transition: all.2s;

    &:hover{
        background-color: var(--light-green);
        color: #fff;
    }
`;




