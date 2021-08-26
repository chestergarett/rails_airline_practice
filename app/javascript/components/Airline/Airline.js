import React, {useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import classes from './Airline.module.css'
import Header from './Header';
import ReviewForm from './ReviewForm';

const Airline = (props) => {

    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        const slug = props.match.params.slug
        const url = `/api/v1/airlines/${slug}`

        axios.get(url)
        .then(res => {
            setAirline(res.data)
            setLoaded(true)})
        .catch(res => {
            console.log(res)
            setLoaded(true)
        })
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token').content
        axios.defaults.headers.common('X-CSRF-TOKEN') = csrfToken

        const airline_id = airline.data.id
        axios.post('/api/v1/reviews', {review, airline_id})
        .then(res=>{})
        .catch(res=>{})
    }

    return (
        <div className={classes.wrapper}>
            {loaded &&
            <Fragment>
                <div className={classes.column}>
                    <div className={classes.main}>
                        {loaded && 
                            <Header 
                                attributes={airline.data.attributes}
                                reviews={airline.included}
                            />
                        }
                    </div>
                    <div className={classes.reviews}>

                    </div>
                </div>
                <div className={classes.column}>
                    <ReviewForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        attributes={airline.data.attributes}
                        review={review}/>
                </div>
            </Fragment>
        }
        </div>
    )
}

export default Airline;