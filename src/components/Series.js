import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.section`
  
    flex-direction:row;
    justify-content:center;
    display:flex;
    align-self:center;

    div{
        width:95%; 
        flex-direction:row;
        justify-content:space-between;
        display:flex;
        
    }

`
const Title = styled.section`
  
    width:20%;
    display:flex;
    align-items:start;
    flex-direction:column;
    justify-content:space-between;
    height:20%;
    button{
        width:100%;
        height:20%;
        display:flex;
        align-items:start;
        flex-direction:row;
        justify-content:space-around;
        background-color:white;
        border-radius:08px;
    }

`
const Images = styled.section`
    width:75%;
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 30px;
    column-gap: 30px;
    justify-items: center;
    height:200vh;
    img{
        width:100%;
        height:80%;
        border-bottom:solid 1px;
    }
    div{
   
      border-radius:8px;
      display:flex;
      flex-direction:column;
      border:solid 1px;
      align-items:center;

    }

`
const Tv = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border:solid gray 4px;
    width:100%;  
    align-items:start;
    height:210vh;
    h1{
        
        width:20%; 
        font-size:20px;
        text-align:center; 
        font-weight:900;
    }
   

`

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=e41d5f9d5773dc5887077f4c5ffdb645&language=en-US&page=1"
})
//Criando local(variável) onde os dados da api ficarão salvos

export default class Series extends React.Component {
    state = {
        listSeries: [],
    }

    async componentDidMount() { // Async é uma função que ocorrerá instantanamente ao renderizar a página 
        const response = await api.get()

        console.log("Series ", response.data.results)

        const series = response.data.results.map((item) => {
            return {
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
        })
        this.setState({
            listSeries: series
        })

    }
    render() {
        return (
            <Tv>
                <h1>Popular TV Shows</h1>
            
            <Container>
                
                <div>
                
                    <Title>
                        <button>Sort</button>
                        <button>Filter</button>
                        <button>Where To Watch</button>
                        <button>Search</button>
                    </Title>
                    <Images>
                        {this.state.listSeries.map((item, index) => (
                            <div key={index}>
                                <img src={item.poster_path} alt="" />
                                <p><b>{item.name}</b></p>
                                <p>{item.first_air_date}</p>
                            </div>
                        ))}
                    </Images>

                </div>

            </Container></Tv>
        )
    }
}




