import React, { useState } from 'react';
import FilterBar from "./components/filterBar"
import BeerDisplay from "./components/display"
import styles from "./App.module.scss"

import './App.css';

function App() {

  let [searchFilter, setSearchFilter] = useState("")
  let [selectsFilter, setSelectsFilter] = useState([])

  const searchFilterFtn = (param) => { 
    setSearchFilter(param)
    
    }
  

  const selectsFilterFtn = (param) => { 
    setSelectsFilter(param);
    
  }

  return (
   <div className={styles.page}>
    <div className={styles.filterBar}>
      <h1>Punk API Beer Search!</h1>
      <h3>Search for Beers below, by text or by ABV content</h3>
      <FilterBar selectsFilterFtn={selectsFilterFtn} searchFilterFtn={searchFilterFtn}/> 
      </div>
      <div className={styles.beerDisplay}>
      <BeerDisplay searchFilter={searchFilter} selectsFilter={selectsFilter}/>
    </div>
    </div>
  );
}

export default App;
