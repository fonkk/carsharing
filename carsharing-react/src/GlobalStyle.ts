import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: 'Source Sans Pro', sans-serif;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ]
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    outline: none !important;
    color: inherit;
  }
  p, h1, h2, h3, h4, h5, h6, ul, li {
    padding: 0;
    margin: 0;
  }
  img{
    width: auto;
    height: auto;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;

  }
  textarea:focus, input:focus{
    outline: none;
  }
  input{
    outline: none;
    border: none;
  }
`
