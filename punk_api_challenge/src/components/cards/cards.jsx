import React, { useState, useEffect } from 'react'
import styles from "./cards.module.scss"

const Cards = (props) => {
    const { selectsFilter, searchFilter } = props

    const [beers, setBeers] = useState([])

    useEffect(() => {
        handleSearch(selectsFilter, searchFilter)
        console.log("onchangeofprops")
    }, [selectsFilter, searchFilter])


    const handleSearch = () => {
        // JAMES!!! you are repeating lots of lines of code... 
        // Is there a way we don't have to repeat ourselves so much?
        let url = "https://api.punkapi.com/v2/beers"

        if (searchFilter !== ""){ 
            // CHANGE THIS LINE ... append ?beer_name= on the end of the url
            url += `?beer_name.....`
            console.log("HERE@S THE SEARCH URL " + url)
        } 
        if (selectsFilter.length == 0) {
            // CHANGE THIS LINE ... apend ?abv_lt on the end of the url
            url += `......`
            console.log("HERE@S THE SELECT URL " + url)
        } 

        fetch(url)
            .then(data => data.json())
            .then(data => {
                setBeers(data);
            }) 




        // if (!selectsFilter && searchFilter) {
        //     fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchFilter}&abv_lt=${selectsFilter}`)
        //         .then(data => data.json())
        //         .then(data => {
        //             setBeers(data);
        //             console.log('if1')
        //         })
        // } else if (!selectsFilter  && searchFilter) {
        //     fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchFilter}`)
        //         .then(data => data.json())
        //         .then(data => {
        //             setBeers(data);
        //             console.log('if2')

        //         })
        // } else if (selectsFilter && !searchFilter) {
        //     fetch(`https://api.punkapi.com/v2/beers?abv_lt=${selectsFilter}`)
        //         .then(data => data.json())
        //         .then(data => {
        //             setBeers(data);
        //             console.log(data)

        //         })
        // } else {
        //     fetch(`https://api.punkapi.com/v2/beers`)
        //         .then(data => data.json())
        //         .then(data => {
        //             setBeers(data);
        //             console.log(selectsFilter)
        //             console.log(searchFilter)
        //         })
        // }
    }
console.log(beers)

    return (
        
        <div className={styles.beersDisplay}>

                {
                    beers.map((beer) => (
                        <div className={styles.beerCont}>
                        <p className={styles.beerName}>{beer.name}</p>
                        <img src={beer.image_url}></img>
                        <p className={styles.description}>{beer.tagline}</p>
                        </div>
                       
                    ))
                }
        </div>
        
    )
}


export default Cards

//None of the filters work now
//even with the search and selects filled in, it now can only do the else option 

//what to do tomorrow? 
//debug with Andy 
//have tried for ages, only option now is coaches
