import React from 'react'
import { Link } from 'react-router-dom'

//Komunukasi antar komponen menggunakan props
const Card = (props) => {
    return (
        <Link to={`/detail/${props.id}`} className='card mb-2 mr-2 text-dark'>
            <div className='card-body'>
                <h5><b>{props.title}</b></h5>
                <p>{props.desc}</p>
            </div>
        </Link>
    );
}

export default Card;