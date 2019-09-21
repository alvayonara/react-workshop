import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className='d-flex justify-content-between align-items-center'>
            <h1>Header</h1>
            <Link to='/create' className='btn btn-outline-primary'>
                    Create Books
            </Link>
        </div>
    )
}

export default Header;