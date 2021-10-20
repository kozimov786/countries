import React, { useState } from 'react';
import styled from 'styled-components';


const SearchForm = ({ data, theme }) => {

  return (

    <FormWrapper action="/" method="get" >
      <InputWrapper className={`${theme ? "" : "darker"}`}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="search">
            <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#848484" />
          </g>
        </svg>
        <input className={`${theme ? "" : "darker"}`} type="search" placeholder='Search for a country…' />
      </InputWrapper>
      <div className={`${theme ? "" : "darker"}`}>
        <select>
          <option value="Filter by region" disabled>Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </FormWrapper>
  )
};

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  select{
    max-width: 200px;
    background: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 18px 32px;
    border: none;
  }
`
const InputWrapper = styled.div`
   background: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 18px 32px;
    width: 480px;
    display:flex;
    align-items: center;

`
export default SearchForm;