import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.section`
  display:grid;
  grid-template-columns:repeat(20,12%);
  overflow:scroll;
  height:100%;
  width:100%;
  column-gap:10px;


  h1{
    color:black;
    font-size:15px;
    border:solid white;

    width:90%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    
   
  }
  div{
    width:100%;
  

   
  }
  img{
 
    width:90%;
    border-radius:8px;
 
  }
`

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=e41d5f9d5773dc5887077f4c5ffdb645&language=en-US&page=1"
}) //Criando local(variável) onde os dados da api ficarão salvos


export default class Tv extends React.Component {
  state = {
    listTv: [],
  }
  async componentDidMount() {  // Async é uma função que ocorrerá instantanamente ao renderizar a página 
    const response = await api.get()
    console.log("Series", response.data.resuts)

    const Series = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      }
    })
    this.setState({
      listTv: Series
    })
  }
  render() {
    return (
      <Container>
        {this.state.listTv.map((item, index) => (
          <div key={index}>
            <img src={item.poster_path} alt="" />
            <h1>{item.name}</h1>
          </div>
        ))}
      </Container>
    )
  }
}