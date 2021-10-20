import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Nav = ({ theme, setTheme }) => {
  const themeChangeHandler = () => {
    setTheme(!theme)
  }
  return (
    <NavBar className={`${theme ? "" : "darker"}`}>
      <div className='container'>
        <Link to='/'>
          <h1 className={`${theme ? "" : "dark-color"}`}>Where in the  world?</h1>
        </Link>
        <ThemeWrapper>
          <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.553 13.815c-3.884 0-7.034-2.887-7.034-6.447 0-1.343.448-2.586 1.212-3.618-3.04.945-5.231 3.581-5.231 6.688 0 3.9 3.45 7.062 7.704 7.062 3.389 0 6.266-2.007 7.296-4.796a7.458 7.458 0 0 1-3.947 1.111Z" fill="#fff" stroke="#111517" strokeWidth="1.25" /></svg>
          <button className={`${theme ? "" : "darker"}`} onClick={themeChangeHandler}>{`${theme ? "Dark" : "Light"}`} Mode</button>
        </ThemeWrapper>
      </div>
    </NavBar>
  )
}

const NavBar = styled.div`
 padding-top: 23px;
 padding-bottom: 23px;
 background: #FFFFFF;
 box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
 margin-bottom: 48px;
 .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1320px;
      margin:0 auto;
      padding-left: 20px;
      padding-right: 20px;
 }
 h1{
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  white-space: nowrap;
  margin: 0;
 }
 @media only screen and (max-width:450px){
   h1{
     font-size:20px;
   }
 }
`
const ThemeWrapper = styled.div`
 display: flex;
 align-items: center;
 white-space:nowrap;
`
export default Nav;