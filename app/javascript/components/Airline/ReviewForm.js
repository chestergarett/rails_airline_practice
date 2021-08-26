import React from 'react';
import classes from './ReviewForm.module.css';

const ReviewForm = (props) => {

    return (
        <div className={classes.wrapper}>
            <form onSubmit={props.handleSubmit}>
                <div>Have an experience with {props.attributes.name} Share your review!</div>
                <div className={classes.field}>
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
                </div>
                <div className={classes.field}>
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"/>
                </div>
                <div className={classes.field}>
                    <div className={classes.ratingsContainer}>
                        <div className={classes.ratingTitleText}>
                            Rate this Airline
                            [Start Rating Goes Here]
                        </div>
                    </div>
                </div>
                <button type="submit">Submit your review</button>
            </form>
        </div>
    )
}

export default ReviewForm;