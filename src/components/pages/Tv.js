import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.section`
  display:flex;
  flex:direction:row;
  justify-content:space-evenly;
  overflow:scroll;
  height:100%;
  border:solid yellow;
  width:100%
  h1{
    color:black;
    font-size:10px;
    border:none;
  }
  div{
    width:5.5%
   
  }
  img{
    border:solid orange;
    width:90%
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