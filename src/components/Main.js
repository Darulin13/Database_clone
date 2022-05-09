import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tv from "./pages/Tv";
import Movies from "./pages/Movies"

const Container = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    align-items:center;
    height:75vh;
  
    div{
        width:95%;  
      
    }
    `


const Rota = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:70vh;
    width:100%;
    nav{
        width:60%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
         height:13%;
        align-items:center;
    
        
        @media(max-width:814px){
            width:100%;    
        }
       
    }
    h2{
     
        color:black;
        width:35%;
        font-size:4vh;
    }
    ul{
        border:solid 1px #0d253f;
        width:65%;
        border-radius:20px;
        height:60%;
        overflow:hidden;
    }
    
    button{
        width:25%;

        border-right:none;
        height:100%;
        background-color:white;
        color:#0d253f;
        font-size:13px;
        font-weight:700;
        border:none;
        padding-left:10px;
        padding-right:10px;
        border-radius:20px;
        

    }
    button:hover{ 
        border-radius:30px;
        color:#90cea1;
        background-color:#0d253f;
        cursor: pointer;
  
       
    }
    ul:hover{
      
    
        border-radius:none;
    }
    article{
        height:82%;
     

    }
   `


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=e41d5f9d5773dc5887077f4c5ffdb645&language=en-US&page=1"
})

export default class Main extends React.Component {
    state = {
        listFilmes: [],
        modal: true,

    }
    async componentDidMount() {
        const response = await api.get()
        console.log(response.data.results)

        const filmes = response.data.results.map((item) => {
            return {
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
        })

        this.setState({
            listFilmes: filmes
        })

    }

    Modal = () => {
        this.setState({
            modal: false,
        })
    }

    render() {
        return (
            <Container>

                <div>
                    <Rota>
                        <Router>
                            <nav>
                                <h2>What's Popular</h2>
                                <ul>
                                    <Link to="/Movies"><button onClick={this.Modal}>Streaming</button></Link>
                                    <Link to="/Tv"><button>on TV</button></Link>
                                    <Link to="/For_rent"><button>For rent</button></Link>
                                    <Link to="/Theaters"><button> Theaters</button></Link>
                                </ul>
                            </nav>
                            <article>
                                {this.state.modal && (
                                    <Movies />
                                )}

                                <Routes>
                                    <Route path="/Movies" element={<Movies />} />
                                </Routes>
                                <Routes>
                                    <Route path="/Tv" element={<Tv />} />
                                </Routes>
                            </article>

                        </Router>
                    </Rota>



                </div>
            </Container>
        )
    }
}