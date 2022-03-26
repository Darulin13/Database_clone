import React from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Series from "./components/Series";
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
            <Series/>
           
        </div>
    )
}