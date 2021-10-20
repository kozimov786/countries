import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Country = ({ theme, country, click }) => {

  return (

    <Card className={`${theme ? "" : "darker"}`}>
      <div>
        <img src={country.flags.png} alt={`${country.name} flags`} />
      </div>
      <CardInfo>
        <Link to='/info'>
          <h2 className={`${theme ? "" : "dark-color"}`} onClick={click}>{country.name}</h2>
        </Link>
        <dl>
          <dt>Population:</dt>
          <dd>{country.population}</dd>
        </dl>
        <dl>
          <dt>Region:</dt>
          <dd>{country.region}</dd>
        </dl>
        <dl>
          <dt>Capital:</dt>
          <dd>{country.capital}</dd>
        </dl>
      </CardInfo>
    </Card>
  )
}

const Card = styled.div`
  background-color: #fff;
   width: 264px;
   box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.03);
   border-radius: 5px;
  position: relative;
   overflow: hidden;
   img{
     width: 264px;
     height: 160px;
   }
`
const CardInfo = styled.div`
 padding: 24px 24px 46px 24px;
 h2{
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 16px;
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
 }
 dl{
   display: flex;
   align-items: center;
 }
`
export default Country;