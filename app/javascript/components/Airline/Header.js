import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length

    return (
        <div className={classes.wrapper}>
            <h1><img src={image_url} alt={name}/>{name}</h1>
            <div>
                <div className={classes.totalReviews}>{total} User Reviews</div>
                <div className={classes.starRating}></div>
                <div className={classes.totalOutOf}>{avg_score} out of 5</div>
            </div>
        </div>
        
    )
}

export default Header;