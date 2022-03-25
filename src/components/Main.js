import React from "react";
import axios from "axios";
import styled from 'styled-components'


const Container = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    align-items:center;
    height:90vh;

 
    div{
        width:95%;  
      
    }
    `
const Title = styled.section`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:50%;
    padding-bottom:5vh;

    align-items:center;

    button{
        height:100%;
        background-color:white;
        color:#0d253f;
        font-size:15px;
        font-weight:700;
        border:none;
        padding-left:10px;
        padding-right:10px;
        
        width:25%;
       
    }
    button:hover{ 
        border-radius:30px;
        color:#90cea1;
        background-color:#0d253f;
  
       
    }
   
    h1{
        width:30%; 
        font-size:25px;
        font-weight:400;
    }
    nav{
        height:5vh;
      
        border-radius:30px;
        display:flex;
        align-items:center;
        flex-direction:row;
        justify-content:center;
        width:70%;
        border:#0d253f solid 1px;
        
    }
    `
const Films = styled.section`
    display:flex;
    flex-direction:row;
    overflow:scroll;
    height:44vh;
    border:solid 5px green;
   
    

`
const Info = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    width:50vh; 
    height:40vh;
    border:solid red;
    align-items:center;
    img{
        width:25vh;
        height:40vh;
        border:solid blue;
       
    }
    li {
     font-size:20px;
     list-styled:none;
    }
    
`

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=e41d5f9d5773dc5887077f4c5ffdb645&language=en-US&page=1"
})

export default class Main extends React.Component {
    state = {
        listFilmes: [],

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

    render() {
        return (
            <Container>
                <div>
                    <Title>
                        <h1>What's Popular</h1>
                        <nav>
                            <button>Streaming</button>
                            <button>on TV</button>
                            <button>For rent</button>
                            <button>In Theaters</button>
                        </nav>
                    </Title>

                    <Films>
                        {this.state.listFilmes.map((item,index) => (
                            <Info key={index}>

                                <img src={item.poster_path} alt="" />
                                <li>{item.title}</li>
                                
                            </Info>
                        ))}
                    </Films>

                </div>
            </Container>
        )
    }
}