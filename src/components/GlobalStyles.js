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
button{
  border: none;
  background-color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
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
input{
      width: 100%;
      border: none;
      margin-left: 12px;
      outline-offset: 10px;
      outline-color: #FFFFFF;
      &::placeholder{
         color: #848484;
         line-height: 20px;
      }
    }
.dark{
 background-color: #202C36;
 color :#fff;
}
.darker{
   background-color: #2B3844;
   color: #fff;
   input{
     background-color: transparent;
     outline-color:#2B3844 !important;
   }
   select{
     background-color: #2b3844;
     color: #fff;
   }
 }
 .dark-color{
   color: #fff;
 }
`
export default GlobalStyle;