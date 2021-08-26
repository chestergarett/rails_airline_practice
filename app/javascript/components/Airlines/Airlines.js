import React, {useState, useEffect} from 'react'
import axios from 'axios'
import classes from './Airlines.module.css'
import Airline from './Airline';

const Airlines = () => {

    const [airlines, setAirlines] = useState([])

    useEffect( () => {
        axios.get('/api/v1/airlines.json')
        .then( res => {setAirlines(res.data.data)})
        .catch( res => console.log(res))
    }, [airlines.length])

    const grid = airlines.map(item => {
        return (
            <Airline 
            key={item.attributes.name}
            attributes={item.attributes}
            />
                
        )
    })

    return (
        <div className={classes.home}>
            <div className={classes.header}>
                <h1>OpenFlights</h1>
                <div className={classes.subheader}>Honest, unbiased airline reviews.</div>
            </div>
            <div className={classes.grid}>
                <ul>{grid}</ul>
            </div>
        </div>
    )
}

export default Airlines;