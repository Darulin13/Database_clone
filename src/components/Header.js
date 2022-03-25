import React from "react";
import styled from 'styled-components'

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
   align-item:center;
   button{
    color:white;
    background-color: #0d253f;
    border:solid white 1px;
    font-size:15px;
    
   }
   p{
    font-size:15px; 
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
       font-size:15px;
       list-style:none;
       color:white;
       font-weight:600;
   }
`
const Buttonmore = styled.button`
  font-size:15px;
  border:none;
  color:blue;
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
const Search = styled.form`
    height:50vh;
    width:94%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    h2 {
    
        color:white;
        font-size:60px;
    }
    input{
        width:94%; 
        height:7vh;
        border-radius:30px;
        padding-left: 20px;
        font-size:15px;
        border:solid 1px;
      
    }
    h3{
        color:white;
        font-size:30px;   
    }

`



function Header() {
    return (
        <Container>
            <Sidebar>
                <nav>
                    <Leftbar>
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" />
                        <ul>
                            <li>Movies</li>
                            <li>TV Shows</li>
                            <li>People</li>
                            <li>More</li>
                        </ul>
                    </Leftbar>
                    <Rigthbar>
                        <Buttonmore >+</Buttonmore>
                      
                        <Buttonmore>EN</Buttonmore>
                        <p>Login</p>
                        <p>Join TMDB</p>


                    </Rigthbar>

                </nav></Sidebar>
            <Search>
                <div>
                <h2>Welcome.</h2>
               <h3>Millions of movies, TV shows and people to discover. Explore now.</h3> 
               </div>              
               
               <input placeholder="Search for a movie,tv show,person...." type="text"/>
            </Search>

        </Container>
    )

}
export default Header