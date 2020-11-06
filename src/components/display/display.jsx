import React from 'react'
import Cards from "../cards"

const BeerDisplay = (props) => {
    return (
        
            <Cards searchFilter={props.searchFilter} selectsFilter={props.selectsFilter}/>
        
    )
}

export default BeerDisplay
