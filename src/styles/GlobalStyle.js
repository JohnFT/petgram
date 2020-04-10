import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 html {
     box-sizing: border-box;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
 }
 *,*:befor, *:after {
    box-sizing: inherit;
 }
 *{
     padding: 0;
     margin: 0;
 }
 ul {
     list-style: none
 }

 button {
     background: transparent;
      border:0;
      outline: 0;
 }

 body {
     background: #fefefe;
     height: 100vh;
     max-width: 500px;
     overscroll-behavior: none;
     width: 100%;
     margin: 0 auto;
 }

 #app {
     box-shadow: 0 0 10px rgba(0, 0, 0, .5);
     overflow-x: hidden;
     min-height: 100vh;
     padding-bottom: 10px
 }
`
