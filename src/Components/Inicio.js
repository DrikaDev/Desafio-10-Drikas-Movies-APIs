import React from "react";
import styled from "styled-components";
import BackImage from "./img/popcorn.webp"

const Container = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BackImage});
    background-size: cover
`

const Title = styled.h1`
    color: red;
    font-family: 'Rubik Dirt', cursive;
    font-size: 5rem;
    text-shadow: 5px 5px 15px black;

    @media only screen and (min-width: 360px) and (max-width: 800px){
        text-align: center;
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        text-align: center;
    }
`

export default class Home extends React.Component{
    render(){
        return(
            <Container>
                <Title>Drika´s Movies</Title>
            </Container>
        )
    }
}