import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.section`
  display:grid;
  grid-template-columns:repeat(20,12%);
  overflow-x:scroll;  
  height:85%;
  width:100%;
  column-gap:10px;
  @media(max-width:814px){
    grid-template-columns:repeat(20,20%);
    }
    @media(max-width:425px){
        grid-template-columns:repeat(20,32%);
    }


  p{
    color:black;
    font-size:15px;
    border:solid white;
    font-weight:900;
    width:90%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    
   
  }
  p:hover{
    color:#01b4e4;

}
  div{
    width:100%;
  

   
  }
  img{
    cursor: pointer;
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
            <p>{item.name}</p>
          </div>
        ))}
      </Container>
    )
  }
}