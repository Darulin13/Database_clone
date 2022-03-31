import React from "react";
import styled from 'styled-components'
import axios from "axios";
const Container = styled.header`
   background-color: #0d253f;
  
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;

`
const Rigthbar = styled.section`
   width:30%;
   display:flex;
   flex-direction:row;
   justify-content:space-evenly;
   color:white;
   align-items:center;

   height:100%;

   p{
    cursor: pointer;
    font-size:3vh; 
    font-weight:600;
   }


`
const Leftbar = styled.section`
   width:40%;
   display:flex;
   flex-direction:row;
   justify-content:space-evenly;
   img{
       width:25%;
   }
   ul{
    width:65%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;  
   }
   li{
       width:20%;
       cursor: pointer;
       font-size:3vh; 
       font-weight:600;
       list-style:none;
       color:white;
   
   }
`
const Buttonmore = styled.button`
  font-size:5vh;
  width:10%;
  border:none;
  cursor: pointer;
  color:white;
  font-weight:700;
  background-color:transparent;

  height:100%;
   `
   const En = styled.button`
   background-color:transparent;
   border:solid 1px white;
   color:white;
   width:8%;
   height:60%;
   cursor: pointer;
   font-size:2.5vh;
   font-weight:700;

   `
const Sidebar = styled.section`
    background-color: #0d253f;
    height:10vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    
    nav{
    height:90%;
    width:95%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    }
    `
const Title = styled.section`
    height:25vh;
    width:94%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    h2 {

        color:white;
        font-size:60px;
    }
    h3{
        color:white;
        font-size:30px;   
    }
`

const Search = styled.form`
    width:94%;
    height:30vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
   
    input{
        width:94%; 
        height:30%;
        border-radius:30px;
        padding-left: 20px;
        font-size:15px;
        border:solid 1px;
      
    }

    article{
      
       
        width:94%;
        background-color:white;
        overflow-y:scroll;     
   
    }
    div{
        width:40%;
        height:35%;

        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        border-bottom:solid 1px;
    }
    p{
        width:50%;
    
        font-size:20px;
    }
    img{
        width:10%;
        height:90%;


    }


`

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=e41d5f9d5773dc5887077f4c5ffdb645&language=en-US&page=1"
})



export default class Header extends React.Component {
    state = {
        filterFilms: [],
        listFilms: [],
    }

    async componentDidMount() {
        const response = await api.get()
        console.log("Header", response.data.results)

        const films = response.data.results.map((item) => {
            return {
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
            }
        })
        this.setState({
            listFilms: films
        })
    }



    Search = (event) => {
        const { listFilms } = this.state;

        const filterFilms = listFilms.filter((item) => {
            if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            }
        })
        this.setState({
            filterFilms: filterFilms
        })

    }
    render() {
        return (

            <Container>
                <Sidebar>
                    <nav>
                        <Leftbar>
                            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" />
                            <ul>
                                <li>Movies</li>
                                <li> Shows</li>
                                <li>People</li>
                                <li>More</li>
                            </ul>
                        </Leftbar>
                        <Rigthbar>
                            <Buttonmore >+ </Buttonmore>
                            <En>En</En>
                            <p>Login</p>
                            <p>Join TMDB</p>
                        </Rigthbar>
                    </nav>
                </Sidebar>
                <Title>
                    <div>
                        <h2>Welcome.</h2>
                        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                    </div>
                </Title>
                <Search>
                    <input placeholder="Search for a movie,tv show,person...." type="text" onChange={this.Search} />

                    <article>
                        {this.state.filterFilms.map((item) => (
                            <div>
                                <p>{item.title}</p>
                                <img src={item.poster_path} alt="" />
                            </div>

                        ))}
                    </article>


                </Search>


            </Container>
        )
    }
} 
