import React from "react"
import styled from "styled-components"

const Container = styled.footer`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    background-color:#0d253f;
    padding-top:60px;
    padding-bottom:120px;

    ;
    div{
        width:80%;
        display:flex;
        flex-direction:row;
       justify-content:space-between;
     
       
       @media(max-width:769px){
        flex-direction:column;
        width:90%;

       }
    }
`
const Images = styled.section`
    display:flex;
    flex-direction:column;
    width:20%;
    align-items:end;
    justify-content:space-between;
    @media(max-width:769px){
        width:50%;
        align-self:center;
       }

    
`
const Logo = styled.img`
    display:flex;
    width:60%;
    padding-bottom:50px;
    @media(max-width:769px){
        width:100%;
       }
`
const Button = styled.button`
     width:100%;
    font-size:20px;
    padding-top:10px;
    padding-bottom:10px;
    text-align: center;
    @media(max-width:769px){
        width:100%;
       }
`
const Text = styled.section`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:75%;
    color:white;
    @media(max-width:769px){
        width:100%;
        flex-direction:column;
        justify-content:center;
        padding-top:40px;

       }
    div{
        display:flex;
        flex-direction:column;
        justify-content:start;
        padding-top:40px;

        @media(max-width:769px){
            width:100%;
            justify-content:center;
            align-items:center;
            border-top:solid 1px white;
            padding-bottom:40px;
           }
    }
    h1{
        font-size:20px;
        font-weight:600;
        @media(max-width:769px){
            font-size:14px;
           }
        
    }
    li{
        font-size:15px;
        list-style-type: none; 
        max-width: 260px;
        line-height:20px;
        font-weight:300;
        @media(max-width:769px){
            font-size:10px;
           }
    }

`
export default function Footer() {
    return (
        <Container>
            <div>
                <Images>
                    <Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="Logo" />
                    <Button>Join the Community</Button>
                </Images>
                <Text>
                    <div>
                        <h1>THE BASICS</h1>
                        <ul>
                            <li>About TMDB</li>
                            <li>Contact Us</li>
                            <li>Support Forums</li>
                            <li>API</li>
                            <li>System Status</li>
                        </ul>
                    </div>
                    <div>
                        <h1>GET INVOLVED</h1>
                        <ul>
                            <li>Contribution Bible</li>
                            <li>Add New Movie</li>
                            <li>Add New TV Show
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1>COMMUNITY</h1>
                        <ul>
                            <li>Guidelines</li>
                            <li>Discussions</li>
                            <li>Leaderboard</li>
                            <li>Twitter
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h1>LEGAL</h1>
                        <ul>
                            <li>Terms of Use</li>
                            <li>API Terms of Use</li>
                            <li>Privacy Policy</li>

                        </ul>
                    </div>

                </Text>
            </div>
        </Container>
    )

}