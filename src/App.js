import axios from "axios";
import React, { useState, useEffect } from 'react';
import Country from "./components/Country";
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import CountryInfo from './components/CountryInfo';
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState()

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then((data) => {
        setData(data.data)
        console.log(data);
      })
      .catch((err) => console.log(err))
  }, [])

  function getInfo(e) {
    const getIndex = e.target.innerText;
    console.log(getIndex);
    const selectedItem = data.find(count => {
      return count.name === getIndex;
    })
    setSelected(selectedItem)
  }
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <SearchForm data={data} />
            {data && (
              <List>{data.map((country, index) => (
                <Country country={country} click={getInfo} key={index} />
              ))}</List>
            )}
          </Route>
          <Route path='/info'>
            <CountryInfo selected={selected} />
          </Route>
        </Switch>
      </div>

    </div>
  );
}
const List = styled.div`
 padding-top: 30px;
 padding-bottom: 30px;
 display: grid;
 grid-template-columns: repeat( 4, minmax(264px, 1fr) );
 row-gap: 75px;
 column-gap: 75px;
`

export default App;
