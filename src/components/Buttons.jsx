import React from 'react'
import { Link } from 'react-router-dom'
import "../style/button.css"
import { IconDelete, IconEdit, IconView } from './Icons'

export const Create = ({ link, title }) => {
    return (
        <Link to={link}>
            <button className='create'>{title}</button>
        </Link>
    )
}

export const Delete = ({ link, title = "Delete" }) => {
    return (
        <Link to={link}>
            <button className='delete'>
                <IconDelete />
            </button>
        </Link>
    )
}



export const Update = ({ link, title = "Update" }) => {
    return (
        <Link to={link}>
            <button className='update'>
                <IconEdit />
            </button>
        </Link>
    )
}
export const View = ({ link, title = "View" }) => {
    return (
        <Link to={link}>
            <button className='view'>
                <IconView />
            </button>
        </Link>
    )
}
