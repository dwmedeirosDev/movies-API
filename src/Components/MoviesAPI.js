import React, { Component } from 'react'
import * as S from "./Style.js"
import axios from 'axios'

const MyMoviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=a83c5fa3bb074fe41c058b4210e22cd8&language=en-US&page=1'
})

export default class MoviesAPI extends Component{

    state = {
        movies: []
    }

    componentDidMount(){
        this.handleMovies()
    }

    handleMovies = async () =>{
        const getAPI = await MyMoviesAPI.get()
        const InfoMovies = getAPI.data.results.map(item => {
        return {
           ...item,
           image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
        }
        })
        console.log(getAPI)
        
        this.setState({
            movies: InfoMovies
        })
     }

    render(){
        return(
        < >
            {this.state.movies.map((info, index) => (
                <div key={index}>
                    <S.Teste>
                        <li>
                            {info.title}
                        </li>
                        <li>
                            {info.overview}
                        </li>
                        <img src={info.image} alt="Images" />
                    </S.Teste>
                </div>
            ))}
        </>
        )
    }
}