import React from 'react'
import Painting_Form from './Painting_Form'

const Painting_Create = () => {
    return (
        <div>
            <Painting_Form url={`${import.meta.env.VITE_SERVER}/painting/create`}/>
        </div>
    )
}

export default Painting_Create