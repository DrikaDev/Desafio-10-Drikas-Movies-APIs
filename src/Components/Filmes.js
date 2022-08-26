import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";

const CaixaPesquisa = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: 3rem;
    justify-content: center;
    position: absolute;
    top: 4rem;
    width: 100%;
`

const Title = styled.h1`
    font-size: 1.5rem;
`
const Pesquisa = styled.input`
    border-radius: 5px;
    height: 2rem;
    margin-left: 1rem;
    margin-top: .5rem;
    width: 20rem;
`

const CaixaFilmes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 7rem;
    width: 100%;
`
const ListaFilmes = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    width: 26rem;

    img{
        border-radius: 5px;
        box-shadow: 5px 5px 15px;
        cursor: pointer;
        margin: 0 auto;
        width: 15rem;
    }

    h2{
        margin: 1rem 0 1rem 0;
        text-align: center;
    }

    p{
        text-align: justify;
    }
`


const Filmes_API = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=5dd833cec6d8f739beb27db6d04ea07c&language=pt-BR&page=1"
})

export default class Filmes extends Component{

    state = {
        movies: [],
        moviesFiltrado: []
    }

    handleMoviesFiltrado = (event) => {
        const listaMoviesFiltrado = this.state.movies.filter(item => {
            if (item.title.toLowerCase().includes(event.target.value.toLowerCase())){
                return true
            }else{
                return ""
            }
        })

        this.setState({moviesFiltrado: listaMoviesFiltrado})
    }

    getMovies = async () => {
        const response = await Filmes_API.get()

        const moviesList = response.data.results.map(item => {
            return{
                ...item,
            }
        })

        this.setState({movies: moviesList, moviesFiltrado: moviesList})
        console.log(response);
    }

    componentDidMount(){
        this.getMovies()
    }
    
    render(){
        return(
            <>
            <CaixaPesquisa>
                <Title>Que filme vamos assistir hoje?</Title>
                <Pesquisa onChange={this.handleMoviesFiltrado}/>
            </CaixaPesquisa>
            
            <CaixaFilmes>
                {this.state.moviesFiltrado.map(item => (
                <ListaFilmes>
                    <img src= {`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt= {item.name} title= "Clique para assistir!"/>
                    <h2>{item.title}</h2>
                    <p>{item.overview}</p>
                </ListaFilmes>
                ))}
            </CaixaFilmes>
            </>
        )
    }
}