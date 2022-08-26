import React from "react";
import styled from "styled-components";
import ErroFoto from "./img/404.svg"

const Msg = styled.h1`
    color: red;
    font-size: 3rem;
    font-family: 'Rubik Dirt', cursive;
    position: absolute;
    text-align: center;
    text-shadow: 5px 5px 15px black;
    top: 10rem;
    width: 100%;
`
const CaixaFoto = styled.div`
    width: 100%;
    height: 100vh;
    border: solid;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Foto = styled.img`
    margin-top: 7rem;
    width: 30rem;
`

export default class Erro extends React.Component{
    render(){
        return(
            <>
            <Msg>Ops, essa página não existe!</Msg>
            <CaixaFoto>
                <Foto src={ErroFoto} alt="Imagem Erro 404"/>    
            </CaixaFoto>
            </>
        )
    }
}