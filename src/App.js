import React from "react";
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


    

  }
`;
export default function App() {
    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <Main />
            <Footer/>
      
           
        </div>
    )
}