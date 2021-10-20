import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CountryInfo = ({ selected }) => {



  return (
    <>
      {selected && (
        <Info>
          <Link to='/'>
            <Back>
              <span className='arrow'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="call-made">
                    <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="#111517" />
                  </g>
                </svg>
              </span>
              <span>Back</span>
            </Back>
          </Link>
          <CountryDetails>
            <img src={selected.flags.svg} alt={`${selected.name} flag`} />
            <div>
              <h3>{selected.name}</h3>
              <InfoBox>
                <dl className="first-dl">
                  <Flex>
                    <dt>Native Name:</dt>
                    <dd>{selected.nativeName}</dd>
                  </Flex>
                  <Flex>
                    <dt>Population:</dt>
                    <dd>{selected.population}</dd>
                  </Flex>
                  <Flex>
                    <dt>Region</dt>
                    <dd>{selected.region}</dd>
                  </Flex>
                  <Flex>
                    <dt>Sub Region:</dt>
                    <dd>{selected.subregion}</dd>
                  </Flex>
                  <Flex>
                    <dt>Capital:</dt>
                    <dd>{selected.capital}</dd>
                  </Flex>
                </dl>

                <dl>
                  <Flex>
                    <dt>Top Level Domain:</dt>
                    <dd>{selected.topLevelDomain}</dd>
                  </Flex>
                  <Flex>
                    <dt>Currencies:</dt>
                    <dd>{selected.currencies[0].name}</dd>
                  </Flex>
                  <Flex>
                    <dt>Languages:</dt>
                    {selected.languages.map((lang, index) => <dd key={index}>{lang.name},</dd>)}
                  </Flex>
                </dl>
              </InfoBox>
              <p>Borders:{selected.borders.map((border, index) => <Border key={index}>{border}</Border>)}</p>
            </div>
          </CountryDetails>
        </Info>
      )}
    </>
  )
}
const Info = styled.div`
  padding-top: 32px;

`

const Back = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  padding: 10px 39px;
  font-weight: 300;
  margin-bottom: 80px;
  .arrow{
    margin-right: 10px;
  }
`
const CountryDetails = styled.div`
  display: flex;
  align-items: center;
  h3{
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    margin-top: 0;
    margin-bottom: 23px;
  }
  img{
    width: 561px;
    height: 401px;
    margin-right: 120px;
  }

`
const Flex = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 10px;
 dd{
   margin-left: 5px;
 }
`
const InfoBox = styled.div`
  display: flex;
  .first-dl{
    margin-right: 141px;
  }
`
const Border = styled.span`
   background: #FFFFFF;
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
border-radius: 2px;
padding:5px 24px;
margin-left: 10px;
`
export default CountryInfo;