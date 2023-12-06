import React from 'react'
import Medium_Form from './Medium_Form'

const Medium_Create = () => {
    return (
        <div>
            <Medium_Form url={`${import.meta.env.VITE_SERVER}/medium/create`}/>
        </div>
    )
}

export default Medium_Create