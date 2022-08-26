import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Inicio from "./Components/Inicio"
import Filmes from "./Components/Filmes"
import Series from "./Components/Series"
import Erro from "./Components/ErroPage"
import Footer from "./Components/Footer"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const Menu = styled.nav`
  align-items: center;
  display: flex;
  font-family: 'Rubik Dirt', cursive;
  height: 10vh;
  justify-content: space-evenly;
  position: fixed;
  text-shadow: 5px 5px 5px black;
  width: 100%;
  z-index: 99999;

  li{
    cursor: pointer;
    font-size: 2rem;
    list-style: none;
  }

  a{
    color: red;
    font-weight: bolder;
    text-decoration: none;
  }

  a:hover{
    border-bottom: 5px dotted;
  }
`

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <>
          <GlobalStyle/>
            <Menu>
            <ul>
              <li>
                <Link to= "/">Início</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to= "/filmes">Filmes</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to= "/series">Séries</Link>
              </li>
            </ul>
            </Menu>
          <Footer rodape="&copy; Desenvolvido pela aluna Adriana Gutierrez - 08/2022"/>
        </>
        <Routes>
          <Route path= "/" element = {<Inicio/>}/>
          <Route path= "/filmes" element = {<Filmes/>}/>
          <Route path= "/series" element = {<Series/>}/>
          <Route path= "*" element = {<Erro/>}/>
        </Routes>
      </Router>
    )
  }
}