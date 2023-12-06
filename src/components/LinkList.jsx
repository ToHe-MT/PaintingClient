import React from 'react'
import {NavLink} from 'react-router-dom'
const LinkList = () => {
    return (
        <ul>
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/paintings" activeclassname="active">Paintings</NavLink></li>
            <li><NavLink to="/buyers" activeclassname="active">Buyer</NavLink></li>
            <li><NavLink to="/dimensions" activeclassname="active">Dimensions</NavLink></li>
            <li><NavLink to="/mediums" activeclassname="active">Mediums</NavLink></li>
        </ul>
    )
}

export default LinkList