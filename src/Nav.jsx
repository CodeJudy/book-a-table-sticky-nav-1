import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/" className="fancy-btn">Home</Link>
            <Link to="/menu" className="fancy-btn">Menu</Link>
            <Link to="/booking" className="fancy-btn">Booking</Link>
        </nav>

    )
}

export default Nav