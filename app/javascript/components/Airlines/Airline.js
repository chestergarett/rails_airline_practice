import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Airline.module.css'

const Airline = (props) => {

    return (
        <div className={classes.card}>
            <div className={classes.airlineLogo}>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </div>
            <div className={classes.airlineName}>
                {props.attributes.name}
            </div>
            <div className={classes.airlineScore}>
                {props.attributes.avg_score}
            </div>
            <div className={classes.airlineLink}>
                <Link to={`/airlines/${props.attributes.slug}`}>{props.attributes.name}</Link>
            </div>
        </div>
    )
}

export default Airline;