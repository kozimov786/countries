import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
}
*,
*::after
*::before{
    box-sizing: inherit;
}

body{
    padding: 0;
    margin: 0;
    font-family: "Nunito Sans","Arial",sans-serif;
    font-size: 14px;
    line-height: 16px;
    background-color: #f2f2f2;
    color: #111517;
}
.container{
    max-width: 1320px;
    margin:0 auto;
    padding-left: 20px;
    padding-right: 20px;
}
img{
  display: block;
  width: 100%;
  height: auto;
}
a{
    color: #111517;
    text-decoration: none;
}
dt{
   font-weight: 600;
 }
 dd{
   font-weight: 300;
   margin-left: 5px;
 }
`
export default GlobalStyle;